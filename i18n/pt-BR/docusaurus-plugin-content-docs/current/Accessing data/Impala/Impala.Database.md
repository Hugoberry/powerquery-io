---
title: Impala.Database
---

# Impala.Database


## Description

Importar dados de um cluster do Impala


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Details

Importar dados de um cluster do Impala <code>server</code>. Se uma porta não for especificada, a porta padrão 21050 será usada.


## Examples

### Example #1 
Listar as tabelas em um cluster do Impala.
```powerquery
Impala.Database("localhost:21050")
```



