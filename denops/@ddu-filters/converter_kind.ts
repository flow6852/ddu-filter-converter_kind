import {
  BaseFilter,
  DduItem,
  SourceOptions,
  KindOptions,
} from "https://deno.land/x/ddu_vim@v3.3.3/types.ts";
import { Denops } from "https://deno.land/x/ddu_vim@v3.3.3/deps.ts";

type KindKeyReplace = {
    oldKey: string;
    newKey: string;
};

type Params = {
    kind: string,
    kindKeyReplace?: Array<KindKeyReplace> // 
    options?: KindOptions, // can change?
    otionsOverride?: boolean,
    params?: unknown, // can change?
    paramsOverride?: boolean, // ?
};

export class Filter extends BaseFilter<Params> {
  // deno-lint-ignore require-await
  override async filter(args: {
    denops: Denops;
    sourceOptions: SourceOptions;
    filterParams: Params,
    input: string;
    items: DduItem[];
  }): Promise<DduItem[]> {
    for (const item of args.items) {
        item.kind = args.filterParams.kind;
    }
    return Promise.resolve(args.items);
  }

  override params(): Params {
    return {
        kind: "base",
        kindKeyReplace: undefined,
        options: undefined,
        otionsOverride: undefined,
        params: undefined,
        paramsOverride: undefined
    };
  }
}