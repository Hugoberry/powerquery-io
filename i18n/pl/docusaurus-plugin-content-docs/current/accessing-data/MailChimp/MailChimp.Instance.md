---
title: MailChimp.Instance
---

# MailChimp.Instance


Zwraca nieprzetworzone wyniki odpowiedzi z punktu końcowego interfejsu API usługi MailChimp.


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Remarks

Wywołuje interfejs API usługi MailChimp i zwraca nieprzetworzoną odpowiedź.


## Examples

### Example #1 
Zwraca nieprzetworzone dane z punktu końcowego „reports/click-details” interfejsu API usługi MailChimp dla danej kampanii.
```powerquery
MailChimp.Instance("reports/{campaign_id}/click-details")
```

Result: 
```powerquery
Nieprzetworzone dane ze szczegółami kliknięć dla danej kampanii.
```



