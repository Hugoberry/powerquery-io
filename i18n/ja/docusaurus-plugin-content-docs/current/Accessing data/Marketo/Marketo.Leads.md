---
title: Marketo.Leads
---

# Marketo.Leads


潜在顧客の詳細のテーブルを返します。


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Remarks

<code>url</code>/rest/v1/leads.json の Marketo REST API エンドポイントに対する呼び出しを行います。<code>leadIds</code> のリストに含まれるすべての潜在顧客が返されます。


## Examples

### Example #1 
潜在顧客 3 名の詳細を取得します
```powerquery
Marketo.Leads("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
提供された潜在顧客の詳細を含めたテーブル
```



