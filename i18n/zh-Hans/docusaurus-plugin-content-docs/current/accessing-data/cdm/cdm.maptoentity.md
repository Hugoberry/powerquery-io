---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


返回一个表，其中的列映射到 Common Data Model 中实体的属性，包括数据类型。


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

返回一个表，其中的列映射到 Common Data Model 中实体的属性，包括数据类型。将添加实体定义中的列(如果未映射)，并且将删除任何未映射的列。


