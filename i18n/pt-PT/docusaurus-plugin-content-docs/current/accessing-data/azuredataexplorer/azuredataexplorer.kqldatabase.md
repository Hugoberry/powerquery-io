---
title: AzureDataExplorer.KqlDatabase
---

# AzureDataExplorer.KqlDatabase


Importar dados do cluster Fabric Kusto no modo de deteção.


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

Importa dados da sua instância da Base de Dados KQL


## Examples

### Example #1
Devolve uma tabela de informações dos Eventos do Storm
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
Uma tabela com Eventos do Storm da base de dados "Amostras" no cluster "ajuda"
```



