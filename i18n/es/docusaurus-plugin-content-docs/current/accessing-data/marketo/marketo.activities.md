---
title: Marketo.Activities
---

# Marketo.Activities


Devuelve una tabla con las actividades del cliente potencial.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Remarks

Hace una llamada al punto de conexión de la API de REST de Marketo en `url`/rest/v1/activities.json. Se devuelven todas las actividades de la lista `activityIds` que se produjeron desde las `startTime`.


## Examples

### Example #1
Extrae una tabla de las actividades "Visitar página web" desde el 1 de noviembre de 2015
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
Una tabla con los detalles de todas las actividades "Visitar página web" desde el 1 de noviembre de 2015
```



