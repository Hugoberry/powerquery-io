---
title: Table.Profile
---

# Table.Profile


## Description

Tabloların sütun profilini döndürür.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Details

<code>table</code> içindeki sütunlara ilişkin bir profil döndürür.<br />Her bir sütun için (uygulanabilir olduğu durumlarda) şu bilgiler döndürülür:<ul>  <li>minimum</li>  <li>maksimum</li>  <li>ortalama</li>  <li>standart sapma</li>  <li>sayım</li>  <li>null sayısı</li>  <li>ayrı sayım</li></ul><br />



## Category
Table.Information
