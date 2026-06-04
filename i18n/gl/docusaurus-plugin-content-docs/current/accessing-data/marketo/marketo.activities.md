---
title: Marketo.Activities
---

# Marketo.Activities


Devolve unha táboa coas actividades dos clientes potenciais.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Remarks

Realiza unha chamada ao extremo da API de REST de Marketo en `url`/rest/v1/activities.json. Devolvéronse todas as actividades da lista `activityIds` que ocorreron desde `startTime`.


## Examples

### Example #1
Extrae unha táboa de actividades de "Visitar páxina web" desde o 1 de novembro de 2015.
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
Unha táboa con detalles de todas as actividades de "Visitar páxina web" desde o 1 de novembro.
```



