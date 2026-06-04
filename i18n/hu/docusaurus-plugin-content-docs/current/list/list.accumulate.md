---
title: List.Accumulate
---

# List.Accumulate


Összesít egy összegértéket a lista elemeiből.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

Összegzi a megadott lista elemeiből származó értékeket a gyűjtő használatával.

-   `list`: Az iterálni kívánt lista.
-   `seed`: A kezdeti összegzett érték.
-   `accumulator`: Egy függvény, amely a jelenlegi állapotot és az aktuális elemet veszi, majd visszaadja az új állapotot.


## Examples

### Example #1
Összesít egy összegértéket a lista elemeiből.
```powerquery
let
    Source = List.Accumulate(
        {1, 2, 3, 4, 5},
        0,
        (runningSum, nextNumber) => runningSum + nextNumber
    )
in
    Source
```

Result: 
```powerquery
15
```


### Example #2
Fűzze össze a lista minden szavát úgy, hogy szóköz legyen közöttük, de ne legyen szóköz a sor elején.
```powerquery
let
    Source = List.Accumulate(
        {"The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."},
        null,
        (fullTextSoFar, nextPart) =>
            Text.Combine({fullTextSoFar, nextPart}, " ")
    )
in
    Source
```

Result: 
```powerquery
"The quick brown fox jumps over the lazy dog."
```


### Example #3
Állítson össze egy listát a folyamat befejezési idejéről a kezdési dátum és a folyamat futási idejének listája alapján.
```powerquery
let
    #"Process Duration" =
    {
        #duration(0,1,0,0),
        #duration(0,2,0,0),
        #duration(0,3,0,0)
    },
    #"Start Time" = #datetime(2025, 9, 8, 19, 0, 0),
    #"Process Timeline" = List.Accumulate(
        #"Process Duration",
        {#"Start Time"},
        (accumulatedTimes, nextDuration) =>
            accumulatedTimes & {List.Last(accumulatedTimes) + nextDuration}
    )
in
    #"Process Timeline"
```

Result: 
```powerquery
{
    #datetime(2025, 9, 8, 19, 0, 0),
    #datetime(2025, 9, 8, 20, 0, 0),
    #datetime(2025, 9, 8, 22, 0, 0),
    #datetime(2025, 9, 9, 1, 0, 0)
}
```




## Category
List.Transformation functions
