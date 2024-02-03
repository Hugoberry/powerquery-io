---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


## Description

Menghasilkan fungsi yang mengkombinasikan daftar teks menggunakan pemisah yang ditetapkan.


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Menghasilkan fungsi yang mengkombinasikan daftar nilai teks menjadi nilai teks tunggal menggunakan serangkaian pemisah.


## Examples

### Example #1 
Mengkombinasikan daftar nilai teks menggunakan serangkaian pemisah.
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner
