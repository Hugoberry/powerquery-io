---
title: Splitter.SplitTextByEachDelimiter
---

# Splitter.SplitTextByEachDelimiter


## Description

Menghasilkan fungsi yang membagi teks menjadi daftar teks pada setiap pembatas yang ditetapkan dalam sekuensi.


## Syntax

```powerquery
Splitter.SplitTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Menghasilkan fungsi yang membagi teks menjadi daftar teks pada setiap pembatas yang ditetapkan dalam sekuensi.


## Examples

### Example #1 
Memiisahkan input dengan koma, lalu titik koma, mulai dari awal input.
```powerquery
Splitter.SplitTextByEachDelimiter({",", ";"})("a,b;c,d")
```

Result: 
```powerquery
{"a", "b", "c,d"}
```


### Example #2 
Memisahkan input dengan koma, lalu titik koma, memperlakukan tanda petik seperti karakter lain dan mulai dari akhir input.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByEachDelimiter({",", ";"}, QuoteStyle.None, startAtEnd)("a,""b;c"",d")
```

Result: 
```powerquery
{"a,""b", "c""", "d"}
```




## Category
Splitter
