---
title: Marketo.Leads
---

# Marketo.Leads


Retourne une table avec les détails des prospects.


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Remarks

Effectue un appel au point de terminaison de l'API REST Marketo de <code>url</code>/rest/v1/activities.json. Tous les prospects de la liste <code>leadIds</code> sont retournés.


## Examples

### Example #1 
Extrait les détails pour trois prospects
```powerquery
Marketo.Leads("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
Table avec des détails sur les prospects fournis
```



