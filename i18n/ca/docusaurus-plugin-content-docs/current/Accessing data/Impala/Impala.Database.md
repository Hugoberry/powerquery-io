---
title: Impala.Database
---

# Impala.Database


## Description

Permet importar dades d&#39;un clúster de l&#39;Impala.


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Details

Importeu dades d'un clúster de l'Impala <code>server</code>. Si no s'especifica cap port, per defecte es farà servir el 21050.


## Examples

### Example #1 
Permet enumerar les taules en un clúster de l&#39;Impala.
```powerquery
Impala.Database("localhost:21050")
```



