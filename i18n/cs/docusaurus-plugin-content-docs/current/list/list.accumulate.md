---
title: List.Accumulate
---

# List.Accumulate


Shromažďuje souhrnnou hodnotu položek v seznamu.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

Shromažďuje souhrnnou hodnotu z položek v zadaném seznamu pomocí akumulátoru.

 -   `list`: Seznam, který se má iterovat
-   `seed`: Počáteční kumulovaná hodnota
-   `accumulator`: Funkce, která přijme aktuální stav a aktuální položku a vrátí nový stav


## Examples

### Example #1
Shromažďuje souhrnnou hodnotu z položek v seznamu.
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
Zřetězit každé slovo v seznamu s mezerou mezi nimi, ale nezahrnovat mezeru na začátku
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
Vytvořit seznam časů dokončení procesu z počátečního data a seznam časů spuštění procesu
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
