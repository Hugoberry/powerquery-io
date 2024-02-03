---
title: Marketo.Activities
---

# Marketo.Activities


## Description

Retorna una taula amb activitats dels clients potencials.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Details

Fa una trucada a l'extrem de l'API de REST del Marketo a l'<code>url</code>/rest/v1/activities.json. Es retornen totes les activitats de la llista <code>activityIds</code> que s'han produït des de <code>startTime</code>.


## Examples

### Example #1 
Extreu una taula d&#39;activitats de &#34;Visita pàgina web&#34; des de l&#39;1 de novembre del 2015
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
Una taula amb detalls de totes les activitats de "Visita pàgina web" des de l'1 de novembre
```



