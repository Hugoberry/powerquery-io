---
title: MailChimp.Instance
---

# MailChimp.Instance


Retorna els resultats de la resposta sense processar d'un extrem de l'API del MailChimp.


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Remarks

Fa una trucada a l'API del MailChimp i retorna la resposta sense processar.


## Examples

### Example #1
Retorna les dades sense processar de l'extrem reports/click-details de l'API del MailChimp per a una campanya determinada.
```powerquery
MailChimp.Instance("reports/{campaign_id}/click-details")
```

Result: 
```powerquery
Dades sense processar amb detalls sobre els clics d'una campanya determinada.
```



