---
title: Splitter.SplitTextByEachDelimiter
---

# Splitter.SplitTextByEachDelimiter


## Description

Mengembalikan fungsi yang memisahkan teks kepada senarai teks pada setiap pemisah yang ditentukan dalam jujukan.


## Syntax

```powerquery
Splitter.SplitTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Mengembalikan fungsi yang memisahkan teks kepada senarai teks pada setiap pemisah yang ditentukan dalam jujukan.


## Examples

### Example #1 
Pisahkan input dengan koma, kemudian koma bernoktah, bermula dari permulaan input.
```powerquery
Splitter.SplitTextByEachDelimiter({",", ";"})("a,b;c,d")
```

Result: 
```powerquery
{"a", "b", "c,d"}
```


### Example #2 
Pisahkan input dengan koma, kemudian koma bernoktah, mengendalikan petikan seperti apa-apa aksara lain dan bermula dari hujung input.
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
