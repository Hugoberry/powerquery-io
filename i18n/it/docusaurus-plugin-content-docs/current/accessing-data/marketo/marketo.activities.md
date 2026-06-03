---
title: Marketo.Activities
---

# Marketo.Activities


Restituisce una tabella con le attività relative ai lead.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Remarks

Effettua una chiamata all'endpoint dell'API REST Marketo all'indirizzo `url`/rest/v1/activities.json. Verranno restituite tutte le attività nell'elenco `activityIds` che si sono verificate a partire da `startTime`.


## Examples

### Example #1
Esegue il pull di una tabella di attività "Visita pagina Web" a partire dal 1° novembre 2015
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
Tabella con i dettagli di tutte le attività "Visita pagina Web" a partire dal 1° novembre
```



