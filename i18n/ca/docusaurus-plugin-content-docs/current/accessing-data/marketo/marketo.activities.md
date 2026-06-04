---
title: Marketo.Activities
---

# Marketo.Activities


Retorna una taula amb activitats dels clients potencials.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Remarks

Fa una trucada a l'extrem de l'API de REST del Marketo a l'`url`/rest/v1/activities.json. Es retornen totes les activitats de la llista `activityIds` que s'han produït des de `startTime`.


## Examples

### Example #1
Extreu una taula d'activitats de "Visita pàgina web" des de l'1 de novembre del 2015
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
Una taula amb detalls de totes les activitats de "Visita pàgina web" des de l'1 de novembre
```



