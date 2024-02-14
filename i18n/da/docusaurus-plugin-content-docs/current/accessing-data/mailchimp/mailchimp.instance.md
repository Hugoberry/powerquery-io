---
title: MailChimp.Instance
---

# MailChimp.Instance


Returnerer ubehandlede svarresultater fra slutpunktet for en MailChimp-API.


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Remarks

Foretager et kald til MailChimp-API'en og returnerer et ubehandlet svar.


## Examples

### Example #1 
Returnerer rå data fra slutpunktet for MailChimp-API&#39;ens rapporter/klikdetaljer for en bestemt kampagne.
```powerquery
MailChimp.Instance("rapporter/{campaign_id}/klikdetaljer")
```

Result: 
```powerquery
Rå data med klikdetaljer fra den angivne kampagne.
```



