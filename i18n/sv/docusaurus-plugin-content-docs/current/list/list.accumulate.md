---
title: List.Accumulate
---

# List.Accumulate


Ackumulerar ett summary-värde från objekten i listan.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

Ackumulerar ett sammanfattningsvärde från objekten i den angivna listan med hjälp av ackumulatorn.

-   `list`: Listan som ska itereras.
-   `seed`: Ett initialt ackumulerat värde.
-   `accumulator`: En funktion som tar det aktuella tillståndet och det aktuella objektet och returnerar det nya tillståndet.


## Examples

### Example #1
Ackumulerar sammanfattningsvärdet från objekten i listan.
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
Sammanfoga varje ord i listan med ett blanksteg mellan, men ta inte med ett blanksteg i början.
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
Skapa en lista över processens slutförandetider från ett startdatum och en lista över processkörningstider.
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
