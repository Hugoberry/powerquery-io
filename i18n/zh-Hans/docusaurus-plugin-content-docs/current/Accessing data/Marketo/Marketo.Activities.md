---
title: Marketo.Activities
---

# Marketo.Activities


返回包含潜在客户活动的表。


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Remarks

在 <code>url</code>/rest/v1/activities.json 上调用 Marketo REST API 终结点。返回列表 <code>activityIds</code> 中自 <code>startTime</code> 以来发生的所有活动。


## Examples

### Example #1 
拉取自 2015 年 11 月 1 日以来的“访问网页”活动表
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
包含自 11 月 1 日以来所有“访问网页”活动详细信息的表
```



