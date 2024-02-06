---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


Veri türleri dahil, Common Data Model&#39;deki bir varlığın özniteliklerine eşlenmiş sütunların bulunduğu bir tablo döndürür.


## Syntax

```powerquery
Cdm.MapToEntity(
    table as table,
    columnDefinitions as any,
    optional defaultType as type,
    optional defaultCdmClass as text
) as table
```


## Remarks

Veri türleri dahil, Common Data Model'deki bir varlığın özniteliklerine eşlenmiş sütunların bulunduğu bir tablo döndürür. Varlık tanımındaki sütunlar eşlenmemişse eklenir ve eşlenmemiş sütunlar kaldırılır.


