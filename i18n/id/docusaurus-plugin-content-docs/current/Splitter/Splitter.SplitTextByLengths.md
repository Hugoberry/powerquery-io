---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


## Description

Menghasilkan fungsi yang membagi teks menjadi daftar teks dengan setiap panjang yang ditetapkan.


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Details

Menghasilkan fungsi yang membagi teks menjadi daftar teks dengan setiap panjang yang ditetapkan.


## Examples

### Example #1 
Memisahkan input menjadi dua karakter pertama yang diikuti dengan tiga karakter berikutnya, mulai dari awal input.
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
Memisahkan input menjadi dua karakter pertama yang diikuti dengan dua karakter berikutnya, mulai dari akhir input.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByLengths({5, 2}, startAtEnd)("RedmondWA98052")
```

Result: 
```powerquery
{"WA", "98052"}
```




## Category
Splitter
