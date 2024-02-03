---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


## Description

Mengembalikan fungsi yang memisahkan teks kepada senarai teks pada ruang putih.


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Mengembalikan fungsi yang memisahkan teks kepada senarai teks pada ruang putih.


## Examples

### Example #1 
Pisahkan input mengikut aksara ruang putih, dengan mengendalikan petikan seperti mana-mana aksara lain.
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter
