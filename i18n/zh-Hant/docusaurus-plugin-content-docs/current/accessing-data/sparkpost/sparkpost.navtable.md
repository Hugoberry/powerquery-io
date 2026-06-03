---
title: SparkPost.NavTable
---

# SparkPost.NavTable



## Syntax

```powerquery
SparkPost.NavTable(
    DaysToAggregate as number
) as table
```


## Remarks

以使用者所指定天數彙總的資料，擷取由 SparkPost 連接器公開的內建資料表。當您使用此連接器重新整理這些資料表或呼叫 SparkPost API 時，請留意 SparkPost API 有嚴格的 API 速率限制。若看到 SparkPost 伺服器傳回 429 狀態碼，即表示您已達到速率限制，需要稍待片刻才能進行更多呼叫。當要為 Number of days 參數選擇值時，請注意 API 只會儲存 6 個月份的資料。


