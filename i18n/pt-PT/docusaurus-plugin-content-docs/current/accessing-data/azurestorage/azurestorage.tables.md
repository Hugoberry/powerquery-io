---
title: AzureStorage.Tables
---

# AzureStorage.Tables


Devolve uma tabela de navegação que contém as tabelas encontradas na conta especificada a partir de um cofre de armazenamento do Azure.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Remarks

Devolve uma tabela de navegação que contém uma linha para cada tabela encontrada no URL da conta, `account`, a partir de um cofre de armazenamento do Azure. Cada linha contém uma ligação para a tabela do Azure. Pode ser fornecido um parâmetro de registo opcional, `options`, para especificar propriedades adicionais. O registo pode conter os seguintes campos:

-   `Timeout` : Uma duração que controla o tempo que se deve aguardar antes de abandonar o pedido ao servidor. O valor predefinido é específico da origem.



## Category
Accessing data
