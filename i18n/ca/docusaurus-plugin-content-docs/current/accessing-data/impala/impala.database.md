---
title: Impala.Database
---

# Impala.Database


Permet importar dades d'un clúster de l'Impala.


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Importeu dades d'un clúster de l'Impala `server`. Si no s'especifica cap port, per defecte es farà servir el 21050.


## Examples

### Example #1
Permet enumerar les taules en un clúster de l'Impala.
```powerquery
Impala.Database("localhost:21050")
```



