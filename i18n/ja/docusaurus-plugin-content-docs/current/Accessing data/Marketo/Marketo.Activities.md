---
title: Marketo.Activities
---

# Marketo.Activities


## Description

潜在顧客のアクティビティを含めたテーブルを返します。


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Details

<code>url</code>/rest/v1/activities.json の Marketo REST API エンドポイントに対する呼び出しを行います。<code>activityIds</code> に含まれるアクティビティのうち、<code>startTime</code>以降に発生したすべてのアクティビティは返されます。


## Examples

### Example #1 
2015 年 11 月 1 日以降の &#34;ウェブページ訪問&#34; アクティビティのテーブルを取得します
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
2015 年 11 月 1 日以降のすべての "ウェブページ訪問" アクティビティの詳細を示したテーブル
```



