---
title: Text.InferNumberType
---

# Text.InferNumberType


## Description

Menyimpulkan tipe bilangan granular (int64. Type, Double.Type, dan seterusnya) dari angka yang dikodekan dalam teks


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Details

Menyimpulkan jenis angka granular (Int64.Type, Double.Type, dan seterusnya) dari <code>text</code>. Kesalahan dimunculkan jika<code>text</code> bukan angka. <code>culture</code> opsional juga dapat diberikan (misalnya, "en-US").



## Category
Text
