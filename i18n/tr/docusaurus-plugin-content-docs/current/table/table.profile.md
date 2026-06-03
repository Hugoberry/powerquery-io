---
title: Table.Profile
---

# Table.Profile


Tabloların sütun profilini döndürür.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Remarks

`table` içindeki sütunlara ilişkin bir profil döndürür.

Her bir sütun için (uygulanabilir olduğu durumlarda) şu bilgiler döndürülür:

-   minimum
-   maksimum
-   ortalama
-   standart sapma
-   sayım
-   null sayısı
-   ayrı sayım



## Category
Table.Information
