---
title: MailChimp.Collection
---

# MailChimp.Collection


Returnerar en tabell med data från en MailChimp-slutpunkt.


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Remarks

Anropar MailChimp API:n och returnerar den resulterande datauppsättningen som en tabell. Bläddrar automatiskt igenom alla resultat. entityName-parametern som är valfri, kan användas för API-slutpunkter där rot-slutpunkten och huvudsakliga entityName i JSON-responsen inte matchar.


## Examples

### Example #1 
Hämtar en tabell med data från list-slutpunkten av MailChimps API:er.
```powerquery
MailChimp.Collection("listor")
```

Result: 
```powerquery
En tabell med listdata.
```


### Example #2 
Hämtar en tabell med data från kampanjmapp-slutpunkten av MailChimps API:er.
```powerquery
MailChimp.Collection("kampanjmappar", "mappar")
```

Result: 
```powerquery
En tabell med kampanjmapp-data.
```



