---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


Webtrends の主要指標を含むテーブルを返します。


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Remarks

Webtrends KeyMetrics エンドポイントへの呼び出しを実行して、すべてのデータをテーブルとして返します。


## Examples

### Example #1 
過去 30 日間のテナント 98765 の主要指標のテーブルをプルします
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
主要指標のテーブル
```



