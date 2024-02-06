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

此函式可用來呼叫 SparkPost API v1 所提供的任何「清單」端點。使用此函式呼叫 SparkPost API 時，請留意 SparkPost API 有嚴格的 API 速率限制。若看到 SparkPost 伺服器傳回 429 狀態碼，即表示您已達到速率限制，需要稍待片刻才能進行更多呼叫。


## Examples

### Example #1 
傳回具有單一資料行的資料表，其中填入某一個 SparkPost API v1「清單」端點的資料 (如需詳細資料，請參閱 SparkPost 文件)。
```powerquery
Source = SparkPost.GetList("metrics/campaigns")
```

Result: 
```powerquery
Json.Document
```



