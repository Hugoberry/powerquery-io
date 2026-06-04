---
title: List.Accumulate
---

# List.Accumulate


Nahromadí súhrnnú hodnotu z položiek v zozname.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

Akumuluje súhrnnú hodnotu z položiek v zadanom zozname pomocou akumulátora.

-   `list`: Zoznam, ktorý sa má iterovať.
-   `seed`: Počiatočná akumulovaná hodnota.
-   `accumulator`: Funkcia, ktorá prijme aktuálny stav a aktuálnu položku a vráti nový stav.


## Examples

### Example #1
Akumuluje súhrnnú hodnotu z položiek v zozname.
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
Zreťazte jednotlivé slová v zozname s medzerou medzi nimi, ale nezahrňte medzeru na začiatku.
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
Vytvorte zoznam časov dokončenia procesu od dátumu začatia a zoznam časov spustenia procesu.
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
