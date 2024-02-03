---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


## Description

Mengembalikan fungsi yang menggabungkan senarai teks menggunakan jujukan pembatas.


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Mengembalikan fungsi yang menggabungkan satu senarai nilai teks menjadi nilai teks tunggal menggunakan pembatas yang ditentukan.


## Examples

### Example #1 
Gabungkan senarai nilai teks menggunakan jujukan pembatas.
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner
