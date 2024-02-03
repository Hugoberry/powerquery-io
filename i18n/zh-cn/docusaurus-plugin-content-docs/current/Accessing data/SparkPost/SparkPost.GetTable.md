---
title: SparkPost.GetTable
---

# SparkPost.GetTable


## Description

从 SparkPost API v1 返回包含可用指标的表


## Syntax

```powerquery
SparkPost.GetTable(
    DaysToAggregate as number,
    MetricColumns as text,
    NonMetricColumns as text,
    Path as text
) as table
```


## Details

此函数可用于检索来自 SparkPost API v1 的特定“指标”终结点的数据。使用此连接器刷新这些表或调用 SparkPost API 时，请注意 SparkPost API 有严格的 API 速率限制。如果 SparkPost 服务器返回了 429 状态代码，表明已达到速率限制，需要先稍等片刻，再执行多个调用。选择“天数”参数的值时，请注意 API 仅存储相当于 6 个月的数据。


## Examples

### Example #1 
检索在过去三天内聚合的所有 campaign_ids 的 count_sent 和 count_rejected 可交付性指标。
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
表
```



