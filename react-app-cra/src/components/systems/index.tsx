import { useEffect, useState } from "react";
import { fetchSystems } from "./use-systems";
import { SystemType } from "./types";
import { Icon } from "../icons";
// In order to loas tailwind styles on the remote, we have to share its configs in the same bundle.
import '../../index.css';

type SystemsProp = {
  systemType: 'OK' | 'Warning' | 'Error' | 'Critical' | 'Offline' //| 'Other';
  onClick?: () => void;
};

export const Systems = ({ systemType, onClick }: SystemsProp): JSX.Element => {
  const [systems, setSystems] = useState<SystemType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchSystems();
      setSystems(data);
    }

    fetchData();
  }, []);

  function getSystem() {
    return systems.find((system) => system.systemType === systemType);
  }

  function defineSystemTextColor() {
    const colorMap = {
      'OK': 'text-greenLight700',
      'Warning': 'text-yellow700',
      'Error': 'text-error700',
      'Critical': 'text-grayBlue700',
      'Offline': 'text-gray700',
      // 'Other': 'text-blueLight700',
    }
    return colorMap[systemType];
  }

  function defineBarColor() {
    const colorMap = {
      'OK': 'bg-greenLight700',
      'Warning': 'bg-yellow500',
      'Error': 'bg-error500',
      'Critical': 'bg-grayBlue700',
      'Offline': 'bg-gray300',
      // 'Other': 'bg-blueLight300',
    }
    return colorMap[systemType];
  }

  function defineIconBackground() {
    const colorMap = {
      'OK': 'bg-greenLight50',
      'Warning': 'bg-yellow50',
      'Error': 'bg-error50',
      'Critical': 'bg-grayBlue50',
      'Offline': 'bg-gray50',
      'Other': 'bg-blueLight50',
    }
    return colorMap[systemType];
  }

  function defineIcon(): any {
    const iconMap = {
      'OK': 'check',
      'Warning': 'bell-ring',
      'Error': 'alert-circle',
      'Critical': 'alert-hexagon',
      'Offline': 'cloud-off',
      // 'Other': 'message-question-square',
    }
    return iconMap[systemType];
  }

  return (
    <div
      onClick={onClick}
      className="rounded-lg border-neutral-400 border-[1px] w-full max-w-[215px] px-5 py-4 flex flex-col items-baseline cursor-pointer"
    >
      <span className="font-medium mb-2">{getSystem()?.systemType}</span>
      <div className="pb-4 flex w-full items-center justify-between">
        <span className={`text-3xl font-semibold ${defineSystemTextColor()}`}>{getSystem()?.total}</span>
        <div className={`rounded-full w-10 h-10 flex justify-center ${defineIconBackground()}`}>
          <Icon name={defineIcon()} styles="self-center" />
        </div>
      </div>
      <div className={`h-1	w-full rounded ${defineBarColor()}`} />
    </div>  
  );
};
