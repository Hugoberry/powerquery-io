---
title: AzureStorage.Tables
---

# AzureStorage.Tables


Retorna uma tabela navegacional com as tabelas encontradas na conta especificada de um cofre de armazenamento do Azure.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Remarks

Retorna uma tabela de navegação contendo uma linha para cada tabela encontrada na URL da conta, `account`, de um cofre de armazenamento do Azure. Cada linha contém um link para a tabela do Azure. Um parâmetro de registro opcional, `options`, pode ser fornecido para especificar propriedades adicionais. O registro pode conter os seguintes campos:

-   `Timeout` : Uma duração que controla o tempo de espera até que a solicitação para o servidor seja abandonada. O valor padrão é específico da origem.



## Category
Accessing data
