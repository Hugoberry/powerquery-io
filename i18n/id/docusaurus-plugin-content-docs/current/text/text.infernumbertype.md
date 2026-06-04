---
title: Text.InferNumberType
---

# Text.InferNumberType


Menyimpulkan tipe bilangan granular (int64. Type, Double.Type, dan seterusnya) dari angka yang dikodekan dalam teks


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Remarks

Menyimpulkan jenis angka granular (Int64.Type, Double.Type, dan seterusnya) dari `text`. Kesalahan dimunculkan jika`text` bukan angka. `culture` opsional juga dapat diberikan (misalnya, "en-US").



## Category
Text
