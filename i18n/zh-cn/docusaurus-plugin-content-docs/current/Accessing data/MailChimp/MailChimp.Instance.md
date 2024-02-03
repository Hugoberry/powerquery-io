---
title: MailChimp.Instance
---

# MailChimp.Instance


## Description

从 MailChimp API 终结点返回原始响应结果。


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Details

调用 MailChimp API 并返回原始响应。


## Examples

### Example #1 
从报表/单击详细信息 MailChimp API 终结点返回指定市场活动的原始数据。
```powerquery
MailChimp.Instance("reports/{campaign_id}/click-details")
```

Result: 
```powerquery
指定市场活动的单击详细信息原始数据。
```



