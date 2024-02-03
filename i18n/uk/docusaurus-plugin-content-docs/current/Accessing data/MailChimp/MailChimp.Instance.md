---
title: MailChimp.Instance
---

# MailChimp.Instance


## Description

Повертає необроблені результати відповіді з кінцевої точки інтерфейсу API MailChimp.


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Details

Викликає інтерфейс API MailChimp і повертає необроблену відповідь.


## Examples

### Example #1 
Повертає необроблені дані з кінцевої точки &#34;звіти/відомості про натискання&#34; інтерфейсу API MailChimp для заданої кампанії.
```powerquery
MailChimp.Instance("reports/{campaign_id}/click-details")
```

Result: 
```powerquery
Необроблені відомості про натискання із заданої кампанії.
```



