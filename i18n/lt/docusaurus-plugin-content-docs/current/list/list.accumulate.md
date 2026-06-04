---
title: List.Accumulate
---

# List.Accumulate


Iš sąrašo elementų sudaroma sumos reikšmė.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

Kaupia suvestinę reikšmę iš nurodyto sąrašo elementų, naudodamas sąvadą.

-   `list`: kartojamas sąrašas.
-   `seed`: pradinė sukaupta reikšmė.
-   `accumulator`: funkcija, kuri perima dabartinę būseną ir dabartinį elementą bei pateikia naują būseną.


## Examples

### Example #1
Iš sąrašo elementų kaupiama suvestinės reikšmė.
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
Sujunkite kiekvieną sąrašo žodį, palikdamas tarpą tarp jų, bet nepridėkite tarpo pradžioje.
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
Sukurkite proceso užbaigimo laikų sąrašą nuo pradžios datos ir proceso vykdymo laikų sąrašo.
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
