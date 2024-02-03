---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


## Description

Mengembalikan fungsi yang memisahkan teks kepada senarai teks menurut ofset dan panjang yang ditentukan.


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Details

Mengembalikan fungsi yang memisahkan teks kepada senarai teks mengikut ofset dan panjang yang ditentukan. Panjang nol menunjukkan bahawa semua input yang tinggal harus disertakan.


## Examples

### Example #1 
Pisahkan input mengikut kedudukan dan pasangan panjang yang ditentukan, bermula dari permulaan input. Ambil perhatian bahawa julat dalam contoh ini bertindih.
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
Pisahkan input dengan kedudukan dan pasangan panjang yang ditentukan, bermula dari hujung input.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByRanges({{0, 5}, {6, 2}}, startAtEnd)("RedmondWA?98052")
```

Result: 
```powerquery
{"WA", "98052"}
```


### Example #3 
Pisahkan input kepada poskod panjang tetap diikuti dengan nama bandar panjang pemboleh ubah.
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter
