---
title: SparkPost.GetTable
---

# SparkPost.GetTable


傳回內含 SparkPost API v1 所提供之計量的資料表


## Syntax

```powerquery
SparkPost.GetTable(
    DaysToAggregate as number,
    MetricColumns as text,
    NonMetricColumns as text,
    Path as text
) as table
```


## Remarks

此函式可用來從 SparkPost API v1 的特定「計量」端點擷取資料。當您使用此連接器重新整理這些資料表或呼叫 SparkPost API 時，請留意 SparkPost API 有嚴格的 API 速率限制。若看到 SparkPost 伺服器傳回 429 狀態碼，即表示您已達到速率限制，需要稍待片刻才能進行更多呼叫。當要為天數參數選擇值時，請注意 API 只會儲存 6 個月份的資料。


## Examples

### Example #1 
擷取過去三天所彙總之所有 campaign_ids 的 count_sent 及 count_rejected 傳遞能力計量。
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
資料表
```



