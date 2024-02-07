---
title: SparkPost.GetTable
---

# SparkPost.GetTable


SparkPost API v1 から利用可能な指標のテーブルを返します


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

この関数は、SparkPost API v1 の特定の "Metrics" エンドポイントからデータを取得するときに使用できます。このコネクタを使用してこれらのテーブルを更新するか、SparkPost API に呼び出しを行う場合、SparkPost API には厳密な API レートの制限があることに留意してください。SparkPost サーバーから 429 状態コードが返される場合、このレート制限に達し、さらに呼び出しを行うには数分待つ必要が生じます。日数パラメーターの値を選択する際、API で格納できるのは 6 か月分のデータのみであることに注意してください。


## Examples

### Example #1 
過去 3 日間に集計されたすべての campaign_ids に関して count_sent と count_rejected 配信メトリックを取得します。 
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
テーブル
```



