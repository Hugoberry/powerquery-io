---
title: MailChimp.Instance
---

# MailChimp.Instance


## Description

Vrátí nezpracované výsledky odpovědi z koncového bodu rozhraní API MailChimp.


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Details

Zavolá rozhraní API API MailChimp a vrátí nezpracovanou odpověď.


## Examples

### Example #1 
Vrátí nezpracovaná data z koncového bodu reports/click-details rozhraní API MailChimp pro danou kampaň.
```powerquery
MailChimp.Instance("reports/{id_kampaně}/click-details")
```

Result: 
```powerquery
Nezpracovaná data podrobností o kliknutí z dané kampaně
```



