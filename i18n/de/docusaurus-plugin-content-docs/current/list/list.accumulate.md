---
title: List.Accumulate
---

# List.Accumulate


Bildet einen Zusammenfassungswert auf der Grundlage der Elemente in der Liste.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

Akkumuliert einen zusammenfassenden Wert aus den Elementen der angegebenen Liste mithilfe des Akkumulators.

-   `list`: Die zu durchlaufende Liste.
-   `seed`: Ein anfänglicher akkumulierter Wert.
-   `accumulator`: Eine Funktion, die den aktuellen Zustand und das aktuelle Element akzeptiert und den neuen Zustand zurückgibt.


## Examples

### Example #1
Bildet den Zusammenfassungswert auf der Grundlage der Elemente in der Liste.
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
Verketten Sie jedes Wort in der Liste mit einem Leerzeichen zwischen, aber schließen Sie kein Leerzeichen am Anfang ein.
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
Erstellt eine Liste der Prozessabschlusszeiten aus einem Startdatum und einer Liste von Prozesslaufzeiten.
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
