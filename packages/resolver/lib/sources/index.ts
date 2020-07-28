import { EthPMv3 } from "./ethpm-v3";
import { NPM } from "./npm";
import { GlobalNPM } from "./globalnpm";
import { FS } from "./fs";
import { ResolverSource } from "../source";

export function constructSources(options: any): ResolverSource[] {
  return [
    new EthPMv3(options.working_directory),
    new NPM(options.working_directory),
    new GlobalNPM(),
    new FS(options.working_directory, options.contracts_build_directory),
  ];
}
