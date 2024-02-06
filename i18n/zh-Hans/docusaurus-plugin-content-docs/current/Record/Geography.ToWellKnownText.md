---
title: Geography.ToWellKnownText
---

# Geography.ToWellKnownText


将结构化地理点值转换为其 Well-Known Text (WKT)表示形式。


## Syntax

```powerquery
Geography.ToWellKnownText(
    input as record,
    optional omitSRID as logical
) as text
```


## Remarks

将结构化地理点值转换为开放地理空间信息联盟(OGC)定义的 Well-Known Text (WKT)表示形式，该形式也是 SQL Server 等很多数据库使用的序列化格式。



## Category
Record.Serialization
