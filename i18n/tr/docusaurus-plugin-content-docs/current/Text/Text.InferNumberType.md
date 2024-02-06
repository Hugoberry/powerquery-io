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

<code>text</code> değerinin ayrıntılı sayı türünü (Int64.Type, Double.Type vb.) çıkarsar. <code>text</code> bir sayı değilse hata oluşturur. Ayrıca, isteğe bağlı bir <code>culture</code> sağlanabilir (ör. "tr-TR").



## Category
Text
