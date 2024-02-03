---
title: Splitter.SplitTextByAnyDelimiter
---

# Splitter.SplitTextByAnyDelimiter


## Description

Mengembalikan fungsi yang memisahkan teks kepada senarai teks pada sebarang pemisah yang ditentukan.


## Syntax

```powerquery
Splitter.SplitTextByAnyDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Mengembalikan fungsi yang memisahkan teks kepada senarai teks pada sebarang pemisah yang ditentukan.


## Examples

### Example #1 
Pisahkan input dengan koma atau koma bernoktah, mengabaikan petikan dan pemisah petikan dan bermula dari permulaan input.
```powerquery
Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv)("a,b;""c,d;e"",f")
```

Result: 
```powerquery
{"a", "b", "c,d;e", "f"}
```


### Example #2 
Pisahkan input dengan koma atau koma bernoktah, mengabaikan petikan dan pemisah petikan dan bermula dari hujung input.
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
