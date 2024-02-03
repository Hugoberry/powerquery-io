---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


## Description

Mengembalikan fungsi yang memisahkan teks kepada senarai teks menurut pemisah yang ditentukan.


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Mengembalikan fungsi yang memisahkan teks kepada senarai teks menurut pemisah yang ditentukan.


## Examples

### Example #1 
Pisahkan input dengan koma, mengabaikan koma yang dipetik.
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter
