---
title: List.Accumulate
---

# List.Accumulate


Tiek apkopota saraksta vienumu kopsavilkuma vērtība.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

Tiek apkopota norādītā saraksta vienumu kopsavilkuma vērtība, izmantojot akumulatoru.

-   `list`: saraksts iterācijai.
-   `seed`: sākotnējā uzkrātā vērtība.
-   `accumulator`: funkcija, kas izmanto pašreizējo stāvokli un pašreizējo vienumu un atgriež jauno stāvokli.


## Examples

### Example #1
Tiek apkopota saraksta vienumu kopsavilkuma vērtība.
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
Apvienojiet katru vārdu sarakstā ar atstarpi starp tiem, bet neiekļaujiet atstarpi sākumā.
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
Izveidojiet procesa pabeigšanas laiku sarakstu no sākuma datuma un procesa izpildes laiku sarakstu.
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
