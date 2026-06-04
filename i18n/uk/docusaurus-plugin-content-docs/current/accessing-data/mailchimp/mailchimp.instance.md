---
title: MailChimp.Instance
---

# MailChimp.Instance


Повертає необроблені результати відповіді з кінцевої точки інтерфейсу API MailChimp.


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Remarks

Викликає інтерфейс API MailChimp і повертає необроблену відповідь.


## Examples

### Example #1
Повертає необроблені дані з кінцевої точки "звіти/відомості про натискання" інтерфейсу API MailChimp для заданої кампанії.
```powerquery
MailChimp.Instance("reports/{campaign_id}/click-details")
```

Result: 
```powerquery
Необроблені відомості про натискання із заданої кампанії.
```



