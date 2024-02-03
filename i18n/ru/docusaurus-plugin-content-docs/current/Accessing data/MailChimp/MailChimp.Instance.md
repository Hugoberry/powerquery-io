---
title: MailChimp.Instance
---

# MailChimp.Instance


## Description

Возвращает необработанные результаты ответа от конечной точки API MailChimp.


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Details

Делает вызов API MailChimp и возвращает необработанный ответ.


## Examples

### Example #1 
Возвращает необработанные данные от конечной точки API MailChimp отчетов или сведений о щелчках для заданной кампании.
```powerquery
MailChimp.Instance("reports/{campaign_id}/click-details")
```

Result: 
```powerquery
Необработанные данные сведений о щелчках от заданной кампании.
```



