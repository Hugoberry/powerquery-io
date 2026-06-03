---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


Retorna uma tabela navegacional contendo os contêineres encontrados na conta especificada de um cofre de armazenamento do Azure.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Remarks

Retorna uma tabela de navegação que contém uma linha para cada contêiner encontrado na URL da conta, `account`, de um cofre do Armazenamento do Azure. Cada linha contém um link para os blobs do contêiner. É possível especificar `options` para controlar as seguintes opções:

-   `BlockSize` : O número de bytes a serem lidos antes de aguardar o consumidor de dados. O valor padrão é 4 MB.
-   `RequestSize` : O número de bytes cuja leitura será tentada em uma única solicitação HTTP para o servidor. O valor padrão é 4 MB.
-   `ConcurrentRequests` : A opção ConcurrentRequests dá suporte ao download mais rápido de dados por meio da especificação do número de solicitações a serem feitas em paralelo, ao custo da utilização de memória. A memória necessária é (ConcurrentRequest \* RequestSize). O valor padrão é 16.



## Category
Accessing data
