---
title: HdInsight.Files
---

# HdInsight.Files


Retorna una taula que conté les propietats i els continguts dels BLOBS que hi ha al contenidor especificat des d'un dipòsit d'emmagatzematge de l'Azure.


## Syntax

```powerquery
HdInsight.Files(
    account as text,
    containerName as text
) as table
```


## Remarks

Retorna una taula que conté una fila per a cada fitxer de BLOB que hi ha a l'URL del contenidor, `account`, des d'un dipòsit d'emmagatzematge de l'Azure. Cada fila conté propietats del fitxer i un enllaç al seu contingut.



## Category
Accessing data
