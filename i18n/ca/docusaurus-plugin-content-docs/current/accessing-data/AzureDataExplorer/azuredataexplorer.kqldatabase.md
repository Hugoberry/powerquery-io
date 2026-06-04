---
title: AzureDataExplorer.KqlDatabase
---

# AzureDataExplorer.KqlDatabase


Importeu dades del clúster del Fabric Kusto en mode de descobriment.


## Syntax

```powerquery
AzureDataExplorer.KqlDatabase(
    optional cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Remarks

Importa dades de la vostra instància de base de dades KQL


## Examples

### Example #1
Retorna una taula d'informació sobre Storm Events.
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
Taula que conté Storm Events de la base de dades "Mostres" del clúster "ajuda"
```



