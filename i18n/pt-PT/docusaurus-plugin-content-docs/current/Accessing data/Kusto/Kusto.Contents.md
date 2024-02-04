---
title: Kusto.Contents
---

# Kusto.Contents


## Description

Importa dados do Azure Data Explorer (Kusto)


## Syntax

```powerquery
Kusto.Contents(
    cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Details

Importa dados da instância do seu Azure Data Explorer (Kusto)


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



