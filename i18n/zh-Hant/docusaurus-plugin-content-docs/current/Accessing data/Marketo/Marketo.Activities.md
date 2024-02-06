---
title: Marketo.Activities
---

# Marketo.Activities


傳回包含潛在客戶活動的資料表。


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Remarks

在 <code>url</code>/rest/v1/activities.json 呼叫 Marketo REST API 端點。所有自 <code>startTime</code> 起所發生的活動，都會透過清單 <code>activityIds</code> 傳回。


## Examples

### Example #1 
提取自 2015 年 11 月 1 日起的「瀏覽網頁」活動資料表
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
此資料表包含自 11 月 1 日起之所有「瀏覽網頁」活動的詳細資料
```



