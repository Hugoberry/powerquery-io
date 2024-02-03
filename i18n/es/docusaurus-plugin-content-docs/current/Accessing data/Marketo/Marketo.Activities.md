---
title: Marketo.Activities
---

# Marketo.Activities


## Description

Devuelve una tabla con las actividades del cliente potencial.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Details

Hace una llamada al punto de conexión de la API de REST de Marketo en <code>url</code>/rest/v1/activities.json. Se devuelven todas las actividades de la lista <code>activityIds</code> que se produjeron desde las <code>startTime</code>.


## Examples

### Example #1 
Extrae una tabla de las actividades &#34;Visitar página web&#34; desde el 1 de noviembre de 2015
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
Una tabla con los detalles de todas las actividades "Visitar página web" desde el 1 de noviembre de 2015
```



