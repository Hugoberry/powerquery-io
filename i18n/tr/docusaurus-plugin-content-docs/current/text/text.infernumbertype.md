---
title: Text.InferNumberType
---

# Text.InferNumberType


Metinde kodlanmış bir sayının ayrıntılı sayı türünü (Int64.Type, Double.Type, vb.) çıkarsar.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Remarks

`text` değerinin ayrıntılı sayı türünü (Int64.Type, Double.Type vb.) çıkarsar. `text` bir sayı değilse hata oluşturur. Ayrıca, isteğe bağlı bir `culture` sağlanabilir (ör. "tr-TR").



## Category
Text
