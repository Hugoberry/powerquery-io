---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


## Description

Menghasilkan fungsi yang membagi teks menjadi daftar teks menurut offset dan panjang yang ditetapkan.


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Details

Menghasilkan fungsi yang memisahkan teks menjadi daftar teks sesuai dengan offset dan panjang yang ditentukan. Panjang null menunjukkan bahwa semua input yang tersisa harus disertakan.


## Examples

### Example #1 
Memisahkan input dengan posisi dan pasangan panjang yang ditentukan, mulai dari awal input. Perhatikan bahwa rentang dalam contoh ini tumpang tindih.
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
Memisahkan input dengan posisi dan pasangan panjang yang ditentukan, mulai dari akhir input.
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
Pisahkan input menjadi kode pos panjang tetap diikuti dengan nama kota dengan panjang variabel.
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter
