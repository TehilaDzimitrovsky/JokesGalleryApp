export class Joke{
    category:string | undefined;
    type: string | undefined;
    setup: string | undefined;
    delivery:string | undefined;
    flags: Flag | undefined;
    id: number | undefined;
    error: boolean | undefined;
}

export class Flag{
    nsfw: boolean | undefined;
    religious: boolean | undefined;
    political: boolean | undefined;
    racist: boolean | undefined;
    sexist: boolean | undefined;
}