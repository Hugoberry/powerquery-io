---
title: List.Accumulate
---

# List.Accumulate


Stelt een totale waarde samen van de items in de lijst.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

Verzamelt een samenvattingswaarde uit de items in de opgegeven lijst met behulp van de accumulator.

-   `list`: De lijst om door te lopen.
-   `seed`: Een initiële verzamelde waarde.
-   `accumulator`: een functie die de huidige status en het huidige item accepteert en de nieuwe status retourneert.


## Examples

### Example #1
Verzamelt de samenvattingswaarde van de items in de lijst.
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
Voeg elk woord in de lijst samen met een spatie ertussen, maar voeg geen spatie toe aan het begin.
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
Maak een lijst met procesvoltooiingstijden vanaf een begindatum en een lijst met uitvoeringstijden van processen.
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
