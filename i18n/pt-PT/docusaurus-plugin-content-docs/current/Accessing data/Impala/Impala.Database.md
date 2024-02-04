---
title: Impala.Database
---

# Impala.Database


## Description

Importar dados de um cluster de Impala


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Details

Importar dados de um cluster de Impala <code>server</code>. Se não foi especificada uma porta, será utilizada a porta predefinida 21050.


## Examples

### Example #1 
Listar as tabelas de um cluster de Impala.
```powerquery
Impala.Database("localhost:21050")
```



