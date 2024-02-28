

export function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {

    let result: number[] = [];

    if (collection1.length != 0)
        for (let i: number = 0; i <= collection1.length; i++)
            result.push(collection1[i]);

    if (collection2.length != 0)
        for (let i: number = 0; i <= collection2.length; i++)
            result.push(collection2[i]);
    
    if (collection3.length != 0)
        for (let i: number = 0; i <= collection3.length; i++)
            result.push(collection3[i]);

    return result;
}
