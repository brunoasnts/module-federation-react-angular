import { SystemType } from "./types";

export function fetchSystems() {
  const systems: SystemType[] = [
    { total: 87, systemType: "OK" },
    { total: 7, systemType: "WARNING" },
  ];
  return new Promise<SystemType[]>((resolve) => resolve(systems));
}
