import { SystemType } from "./types";

export function fetchSystems() {
  const systems: SystemType[] = [
    { total: 87, systemType: "OK" },
    { total: 7, systemType: "Warning" },
    { total: 4, systemType: "Error" },
    { total: 2, systemType: "Critical" },
    { total: 5, systemType: "Offline" },
    { total: 0, systemType: "Other" },
  ];
  return new Promise<SystemType[]>((resolve) => resolve(systems));
}
