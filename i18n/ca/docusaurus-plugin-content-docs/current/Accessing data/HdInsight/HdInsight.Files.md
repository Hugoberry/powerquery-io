---
title: HdInsight.Files
---

# HdInsight.Files


## Description

Retorna una taula que conté les propietats i els continguts dels BLOBS que hi ha al contenidor especificat des d&#39;un dipòsit d&#39;emmagatzematge de l&#39;Azure.


## Syntax

```powerquery
HdInsight.Files(
    account as text,
    containerName as text
) as table
```


## Details

Retorna una taula que conté una fila per a cada fitxer de BLOB que hi ha a l'URL del contenidor, <code>account</code>, des d'un dipòsit d'emmagatzematge de l'Azure. Cada fila conté propietats del fitxer i un enllaç al seu contingut.



## Category
Accessing data
