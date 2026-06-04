---
title: AzureDataExplorer.KqlDatabase
---

# AzureDataExplorer.KqlDatabase


Importe dados do cluster do Kusto do Fabric no modo de descoberta.


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

Importa dados da instância do Banco de Dados KQL


## Examples

### Example #1
Retorna uma tabela de informações dos Storm Events
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
Uma tabela com Eventos do Storm do banco de dados de "Amostras" no cluster de "ajuda"
```



