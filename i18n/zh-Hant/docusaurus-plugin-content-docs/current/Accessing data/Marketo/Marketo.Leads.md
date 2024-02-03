---
title: Marketo.Leads
---

# Marketo.Leads


## Description

傳回包含潛在客戶詳細資料的資料表。


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Details

在 <code>url</code>/rest/v1/leads.json 呼叫 Marketo REST API 端點。所有潛在客戶都會透過清單 <code>leadIds</code> 傳回。


## Examples

### Example #1 
提取三個潛在客戶的詳細資料
```powerquery
Marketo.Leads("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
此資料表包含所提供之潛在客戶的詳細資料
```



