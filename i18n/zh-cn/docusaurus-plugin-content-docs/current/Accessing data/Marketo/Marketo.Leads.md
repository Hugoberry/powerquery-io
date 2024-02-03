---
title: Marketo.Leads
---

# Marketo.Leads


## Description

返回包含潜在客户详细信息的表。


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Details

在 <code>url</code>/rest/v1/leads.json 上调用 Marketo REST API 终结点。返回列表 <code>leadIds</code> 中的所有潜在客户。


## Examples

### Example #1 
拉取三个潜在客户的详细信息
```powerquery
Marketo.Leads("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
包含提供的潜在客户详细信息的表
```



