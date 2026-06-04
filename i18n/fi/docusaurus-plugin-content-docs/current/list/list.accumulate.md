---
title: List.Accumulate
---

# List.Accumulate


Kerää yhteenvetoarvon luettelon kohteista.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

Laskee yhteenvetoarvon määritetyn luettelon kohteista kertymäfunktion avulla.

-   `list`: Toistettava luettelo.
-   `seed`: Alkuperäinen kertynyt arvo.
-   `accumulator`: Funktio, joka palauttaa nykyisen tilan ja nykyisen kohteen perusteella uuden tilan.


## Examples

### Example #1
Laskee yhteenvetoarvon luettelon kohteista.
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
Yhdistä luettelon sanat välilyönnillä, mutta älä lisää välilyöntiä alkuun.
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
Luo luettelo prosessin valmistumisajoista aloituspäivämäärän ja prosessin suoritusaikojen perusteella.
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
