---
title: MailChimp.Instance
---

# MailChimp.Instance


## Description

Retourne des résultats de réponse bruts d&#39;un point de terminaison de l&#39;API MailChimp.


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Details

Appelle l'API MailChimp et retourne la réponse brute.


## Examples

### Example #1 
Retourne des données brutes du point de terminaison de l&#39;API MailChimp de rapports/détails de clic d&#39;une campagne donnée.
```powerquery
MailChimp.Instance("reports/{campaign_id}/click-details")
```

Result: 
```powerquery
Données de détails de clic brutes de la campagne donnée.
```



