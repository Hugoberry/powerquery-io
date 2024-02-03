---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


## Description

Mengembalikan fungsi yang memisahkan teks kepada senarai teks mengikut setiap panjang yang ditentukan.


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Details

Mengembalikan fungsi yang memisahkan teks kepada senarai teks mengikut setiap panjang yang ditentukan.


## Examples

### Example #1 
Pisahkan input kepada dua aksara pertama diikuti dengan tiga yang berikutnya, bermula dari awal input.
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
Pisahkan input kepada tiga aksara pertama diikuti dengan dua yang berikutnya, bermula dari hujung input.
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
