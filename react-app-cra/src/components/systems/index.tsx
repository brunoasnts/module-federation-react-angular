import { useEffect, useState } from "react";
import { fetchSystems } from "./use-systems";
import { SystemType } from "./types";
import { Icon } from "../icons";
// In order to loas tailwind styles on the remote, we have to share its configs in the same bundle.
import '../../index.css';

type SystemsProp = {
  systemType: 'OK' | 'WARNING';
};

export const Systems = ({ systemType }: SystemsProp): JSX.Element => {
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

  return (
    <div className="rounded-lg border-neutral-400 border-[1px] max-w-[215px] px-5 py-4 flex flex-col items-baseline">
      <span className="font-medium mb-2">{getSystem()?.systemType}</span>
      <div className="pb-4 flex w-full items-center justify-between">
        <span className="text-lime-700 text-3xl font-semibold">{getSystem()?.total}</span>
        <div className="bg-greenLight50 rounded-full w-10 h-10 flex justify-center">
          <Icon name="check" styles="self-center" />
        </div>
      </div>
      <div className="h-1	w-full bg-lime-700 rounded" />
    </div>  
  );
};
