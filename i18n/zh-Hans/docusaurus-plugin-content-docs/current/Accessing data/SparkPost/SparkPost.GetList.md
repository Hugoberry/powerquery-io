---
title: SparkPost.GetList
---

# SparkPost.GetList



## Syntax

```powerquery
SparkPost.GetList(
    path as text
) as table
```


## Remarks

此函数可用于调用 SparkPost API v1 提供的任意“列表”终结点。使用此函数调用 SparkPost API 时，请注意 SparkPost API 有严格的 API 速率限制。如果 SparkPost 服务器返回了 429 状态代码，表明已达到速率限制，需要先稍等片刻，再执行多个调用。


## Examples

### Example #1 
返回表，其中一列填充有来自 SparkPost API v1“列表”终结点之一的数据(有关详细信息，请参阅 SparkPost 文档)。
```powerquery
Source = SparkPost.GetList("metrics/campaigns")
```

Result: 
```powerquery
Json.Document
```



