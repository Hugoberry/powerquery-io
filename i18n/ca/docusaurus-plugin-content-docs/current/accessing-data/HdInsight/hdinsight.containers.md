---
title: HdInsight.Containers
---

# HdInsight.Containers


Retorna una taula de navegació que conté els contenidors que s'han trobat al compte especificat des d'un dipòsit d'emmagatzematge de l'Azure.


## Syntax

```powerquery
HdInsight.Containers(
    account as text
) as table
```


## Remarks

Retorna una taula de navegació que conté una fila per a cada contenidor que hi ha a l'URL del compte, `account`, des d'un dipòsit d'emmagatzematge de l'Azure. Cada fila conté un enllaç als BLOBS del contenidor.



## Category
Accessing data
