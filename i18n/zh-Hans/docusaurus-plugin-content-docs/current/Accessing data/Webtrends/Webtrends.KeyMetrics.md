---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


返回包含关键 Webtrends 指标的表。


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Remarks

调用 Webtrends KeyMetrics 终结点，并将所有数据作为表返回。


## Examples

### Example #1 
拉取包含最近 30 天内租户 98765 的关键指标的表
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
包含关键指标的表
```



