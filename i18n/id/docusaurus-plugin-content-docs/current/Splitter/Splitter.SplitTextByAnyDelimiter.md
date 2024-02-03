---
title: Splitter.SplitTextByAnyDelimiter
---

# Splitter.SplitTextByAnyDelimiter


## Description

Menghasilkan fungsi yang membagi teks menjadi daftar teks pada salah satu pembatas yang ditetapkan.


## Syntax

```powerquery
Splitter.SplitTextByAnyDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Menghasilkan fungsi yang membagi teks menjadi daftar teks pada salah satu pembatas yang ditetapkan.


## Examples

### Example #1 
Memisahkan input dengan koma atau titik koma, dan mengabaikan tanda kutip dan pembatas berkutip, dan mulai dari awal input.
```powerquery
Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv)("a,b;""c,d;e"",f")
```

Result: 
```powerquery
{"a", "b", "c,d;e", "f"}
```


### Example #2 
Memisahkan input dengan koma atau titik koma, dengan mengabaikan tanda kutip dan pembatas berkutip, dan mulai dari akhir input.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv, startAtEnd)("a,""b;c,d")
```

Result: 
```powerquery
{"a,b", "c", "d"}
```




## Category
Splitter
