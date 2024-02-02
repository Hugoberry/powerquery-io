---
title: Marketo.Activities
---

# Marketo.Activities


## Description

Retourne une table avec les activités des prospects.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Details

Effectue un appel au point de terminaison de l'API REST Marketo de <code>url</code>/rest/v1/activities.json. Toutes les activités de la liste <code>activityIds</code> qui se sont produites depuis <code>startTime</code> sont retournées.


## Examples

### Example #1 
Extrait une table des activités &#34; Visiter une page web &#34; depuis le 1er novembre 2015
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
Table avec les détails de toutes les activités « Visiter une page web » depuis le 1er novembre
```



