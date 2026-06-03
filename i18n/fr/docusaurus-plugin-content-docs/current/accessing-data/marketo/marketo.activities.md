---
title: Marketo.Activities
---

# Marketo.Activities


Retourne une table avec les activités des prospects.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Remarks

Effectue un appel au point de terminaison de l'API REST Marketo de `url`/rest/v1/activities.json. Toutes les activités de la liste `activityIds` qui se sont produites depuis `startTime` sont retournées.


## Examples

### Example #1
Extrait une table des activités « Visiter une page web » depuis le 1er novembre 2015
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
Table avec les détails de toutes les activités « Visiter une page web » depuis le 1er novembre
```



