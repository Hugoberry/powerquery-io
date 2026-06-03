---
title: DocumentDB.Contents
---

# DocumentDB.Contents


输入 Azure Cosmos DB 帐户的 URL。


## Syntax

```powerquery
DocumentDB.Contents(
    url as text,
    optional database as text,
    optional collection as text,
    optional options as record
) as table
```


## Remarks

在 `url` 位置返回 Azure Cosmos DB 数据库的表。如果指定了`数据库`，将返回一个集合表。此外，如果在`选项`记录中指定了`查询`字段，将返回在指定数据库和/或集合上执行的查询结果。


