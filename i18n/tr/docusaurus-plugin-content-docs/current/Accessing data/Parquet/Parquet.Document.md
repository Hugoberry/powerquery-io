---
title: Parquet.Document
---

# Parquet.Document


Parquet belgesinin içeriğini tablo olarak döndürür.


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Remarks

Parquet belgesinin içeriklerini tablo olarak döndürür. Seçenekler şunlardır:    <ul>    <li> <code>TypeMapping</code> : Dosyaları okurken ve yazarken varsayılan tür eşlemesini denetleyen bir metin değeri. Varsayılan değer null'dur ve özgün türe mümkün olduğunca uygun bir şekilde korumaya çalışır. "Sql" değeri, Sql Server ile en uyumlu sonuçları üretir.</li>    </ul>



## Category
Verilere erişme
