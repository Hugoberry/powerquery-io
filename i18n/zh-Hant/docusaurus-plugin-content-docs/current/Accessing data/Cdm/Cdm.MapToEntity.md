---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


傳回資料表，其資料行對應到 Common Data Model 中實體的屬性，包括資料類型。


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

傳回資料表，其資料行對應到 Common Data Model 中實體的屬性，包括資料類型。如果未對應實體定義中的資料行，將會予以新增並移除任何未對應的資料行。


