---
title: Binary.InferContentType
---

# Binary.InferContentType


读取二进制流，并尝试确定该流的内容类型和格式信息。


## Syntax

```powerquery
Binary.InferContentType(
    source as binary
) as record
```


## Remarks

返回包含字段 Content.Type 的记录，它包含推断的 MIME 类型。    如果推断的内容类型为 text/\*，且检测到编码代码页，则同时还返回包含流的编码的字段 Content.Encoding。    如果推断的内容类型为 text/csv，且格式被分隔，则同时还返回包含潜在分隔符分析的表的字段 Csv.PotentialDelimiter。    如果推断的内容类型为 text/csv，则格式为固定宽度，且同时还返回包含潜在固定宽度列位置分析的列表的字段 Csv.PotentialPositions。



## Category
Binary
