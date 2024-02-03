---
title: MailChimp.Instance
---

# MailChimp.Instance


## Description

從 MailChimp API 端點傳回原始回應結果。


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Details

呼叫 MailChimp API 並傳回原始回應。


## Examples

### Example #1 
從指定活動的 reports/click-details MailChimp API 端點傳回原始資料。
```powerquery
MailChimp.Instance("reports/{campaign_id}/click-details")
```

Result: 
```powerquery
來自指定活動的原始點選詳細資料。
```



