---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


## Description

Belirtilen bir kültürü kullanarak \{ column, type } biçimindeki tür dönüşümünü uygular.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Details

İsteğe bağlı <code>table</code> parametresinde belirtilen kültürü (ör. "tr-TR") kullanarak, <code>typeTransformations</code> girişinin dönüştürme işlemini <code>culture</code> parametresinde (biçim \{ column name, type name} olacak şekilde) belirtilen sütunlara uygulayarak bir tablo döndürür.    Sütun yoksa, özel durum oluşturulur.


## Examples

### Example #1 
&lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; tablosundan [a] sütunundaki sayı değerlerini metin değerlerine dönüştürür.
```powerquery
Table.TransformColumnTypes(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {"a", type text},
    "en-US"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "1", b = 2],
    [a = "3", b = 4]
})
```




## Category
Table.Transformation
