---
title: List.Accumulate
---

# List.Accumulate


Mengumpulkan nilai ringkasan daripada item dalam senarai.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

Mengumpul nilai ringkasan daripada item dalam senarai yang ditentukan menggunakan pengumpul.

-   `list`: Senarai untuk diulang.
-   `seed`: Nilai terkumpul awal.
-   `accumulator`: Fungsi yang mengambil keadaan semasa dan item semasa serta mengembalikan keadaan baharu.


## Examples

### Example #1
Mengumpulkan nilai ringkasan daripada item dalam senarai.
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
Gabungkan setiap perkataan dalam senarai dengan ruang di antara, tetapi jangan sertakan ruang pada permulaan.
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
Bina senarai masa siap proses daripada tarikh mula dan senarai masa jalanan proses.
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
