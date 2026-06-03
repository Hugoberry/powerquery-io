---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


Retorna o conteúdo do blob especificado de um cofre de armazenamento do Azure.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Retorna o conteúdo do blob na URL, `url`, de um cofre do Armazenamento do Azure. `options` pode ser especificado para controlar as seguintes opções:

-   `BlockSize` : O número de bytes a serem lidos antes de aguardar o consumidor de dados. O valor padrão é 4 MB.
-   `RequestSize` : O número de bytes cuja leitura será tentada em uma única solicitação HTTP para o servidor. O valor padrão é 4 MB.
-   `ConcurrentRequests` : A opção ConcurrentRequests dá suporte ao download mais rápido de dados por meio da especificação do número de solicitações a serem feitas em paralelo, ao custo da utilização de memória. A memória necessária é (ConcurrentRequest \* RequestSize). O valor padrão é 16.



## Category
Accessing data
