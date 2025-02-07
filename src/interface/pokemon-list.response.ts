import type { IntegrationResolvedRoute } from "astro";

export interface PokemonListResponse {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
}

export interface Result {
    name: string;
    url:  string;
}
