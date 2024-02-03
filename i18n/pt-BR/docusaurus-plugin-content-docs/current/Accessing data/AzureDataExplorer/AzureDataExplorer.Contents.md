---
title: AzureDataExplorer.Contents
---

# AzureDataExplorer.Contents


## Description

Importar dados do Azure Data Explorer (Kusto)


## Syntax

```powerquery
AzureDataExplorer.Contents(
    cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Details

Importa dados da sua instância do Azure Data Explorer (Kusto)


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



