---
title: Impala.Database
---

# Impala.Database


## Description

Importer des données d&#39;un cluster Impala


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Details

Importer des données d'un cluster Impala <code>server</code>. Si un port n'a pas été spécifié, le port 21050 par défaut est utilisé.


## Examples

### Example #1 
Liste les tables d&#39;un cluster Impala.
```powerquery
Impala.Database("localhost:21050")
```



