---
title: HdInsight.Containers
---

# HdInsight.Containers


## Description

Retorna una taula de navegació que conté els contenidors que s&#39;han trobat al compte especificat des d&#39;un dipòsit d&#39;emmagatzematge de l&#39;Azure.


## Syntax

```powerquery
HdInsight.Containers(
    account as text
) as table
```


## Details

Retorna una taula de navegació que conté una fila per a cada contenidor que hi ha a l'URL del compte, <code>account</code>, des d'un dipòsit d'emmagatzematge de l'Azure. Cada fila conté un enllaç als BLOBS del contenidor.



## Category
Accessing data
