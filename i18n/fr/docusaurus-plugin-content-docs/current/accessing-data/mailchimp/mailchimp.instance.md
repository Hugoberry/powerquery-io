---
title: MailChimp.Instance
---

# MailChimp.Instance


Retourne des résultats de réponse bruts d'un point de terminaison de l'API MailChimp.


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Remarks

Appelle l'API MailChimp et retourne la réponse brute.


## Examples

### Example #1
Retourne des données brutes du point de terminaison de l'API MailChimp de rapports/détails de clic d'une campagne donnée.
```powerquery
MailChimp.Instance("reports/{campaign_id}/click-details")
```

Result: 
```powerquery
Données de détails de clic brutes de la campagne donnée.
```



