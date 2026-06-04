---
title: AzureDataExplorer.Contents
---

# AzureDataExplorer.Contents


Importa dades de l'Azure Data Explorer (Kusto).


## Syntax

```powerquery
AzureDataExplorer.Contents(
    cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Remarks

Permet importar dades de la vostra instància de l'Azure Data Explorer (Kusto).


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



