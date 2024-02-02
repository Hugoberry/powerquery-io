---
title: Stripe.Contents
---

# Stripe.Contents


## Description

Effectue un appel à l&#39;API Stripe, avec l&#39;option de limitation du nombre d&#39;appels d&#39;API effectués.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Details

Effectue un appel à l'API Stripe de https://api.stripe.com/v1/<code>method</code>, avec une <code>requête</code> facultative des enregistrements passés comme paramètres supplémentaires et une <code>pageLimit</code> facultative comme limite du nombre de demandes de l'API. Les données les plus récentes sont retournées en premier. Si <code>pageLimit</code> n'est pas spécifié, toutes les données sont retournées. Stripe version 2015-10-16 est utilisé.


## Examples

### Example #1 
Retourne toutes les données des frais
```powerquery
Stripe.Contents("charges")
```

Result: 
```powerquery
Table avec toutes les données des frais pour le compte Stripe actif
```


### Example #2 
Retourne une page de données des frais
```powerquery
Stripe.Contents("charges", [], 1)
```

Result: 
```powerquery
Table avec les données des frais les plus récents pour le compte Stripe actif
```



