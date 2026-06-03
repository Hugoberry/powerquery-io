---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


Retorna o conteúdo do arquivo especificado de um sistema de arquivos do Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Retorna o conteúdo do arquivo na URL, `url`, de um sistema de arquivos do Azure Data Lake Storage. `options` pode ser especificado para controlar as seguintes opções:

-   `BlockSize` : O número de bytes a serem lidos antes de aguardar o consumidor de dados. O valor padrão é 4 MB.
-   `RequestSize` : O número de bytes cuja leitura será tentada em uma única solicitação HTTP para o servidor. O valor padrão é 4 MB.
-   `ConcurrentRequests` : A opção ConcurrentRequests dá suporte ao download mais rápido de dados por meio da especificação do número de solicitações a serem feitas em paralelo, ao custo da utilização de memória. A memória necessária é (ConcurrentRequest \* RequestSize). O valor padrão é 16.



## Category
Accessing data
