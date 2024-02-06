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

在 <code>url</code> 位置返回 Azure Cosmos DB 数据库的表。如果指定了<code>数据库</code>，将返回一个集合表。此外，如果在<code>选项</code>记录中指定了<code>查询</code>字段，将返回在指定数据库和/或集合上执行的查询结果。


