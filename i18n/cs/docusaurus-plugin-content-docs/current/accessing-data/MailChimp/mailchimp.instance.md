---
title: MailChimp.Instance
---

# MailChimp.Instance


Vrátí nezpracované výsledky odpovědi z koncového bodu rozhraní API MailChimp.


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Remarks

Zavolá rozhraní API API MailChimp a vrátí nezpracovanou odpověď.


## Examples

### Example #1
Vrátí nezpracovaná data z koncového bodu reports/click-details rozhraní API MailChimp pro danou kampaň.
```powerquery
MailChimp.Instance("reports/{campaign_id}/click-details")
```

Result: 
```powerquery
Nezpracovaná data podrobností o kliknutí z dané kampaně
```



