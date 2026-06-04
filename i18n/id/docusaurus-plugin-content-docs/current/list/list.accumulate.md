---
title: List.Accumulate
---

# List.Accumulate


Mengakumulasi nilai ringkasan dari item dalam daftar.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

Mengakumulasi nilai ringkasan dari item dalam daftar yang ditentukan menggunakan akumulator.

-   `list`: Daftar yang akan diiterasi.
-   `seed`: Nilai akumulasi awal.
-   `accumulator`: Fungsi yang mengambil status saat ini dan item saat ini dan menghasilkan status baru.


## Examples

### Example #1
Mengakumulasi nilai ringkasan dari item dalam daftar.
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
Gabungkan setiap kata dalam daftar dengan spasi di antaranya, tetapi jangan sertakan spasi di awal.
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
Buat daftar waktu penyelesaian proses dari tanggal mulai dan daftar waktu eksekusi proses.
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
