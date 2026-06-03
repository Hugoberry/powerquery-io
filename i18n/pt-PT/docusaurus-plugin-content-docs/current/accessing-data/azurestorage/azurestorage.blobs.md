---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


Devolve uma tabela de navegação que contém os contentores encontrados na conta especificada a partir de um cofre de armazenamento do Azure.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Remarks

Devolve uma tabela de navegação que contém uma linha para cada contentor encontrado no URL da conta, `account`, a partir de um cofre de armazenamento do Azure. Cada linha contém uma ligação para os blobs do contentor. `options` pode ser especificado para controlar as seguintes opções:

-   `BlockSize` : O número de bytes a ler antes de aguardar pelo consumidor de dados. O valor predefinido é de 4 MB.
-   `RequestSize` : O número de bytes a tentar ler num único pedido HTTP para o servidor. O valor predefinido é de 4 MB.
-   `ConcurrentRequests` : A opção ConcurrentRequests suporta o descarregamento de dados mais rápido, especificando o número de pedidos a serem feitos em paralelo, ao custo da utilização da memória. A memória necessária é (ConcurrentRequest \* RequestSize). O valor predefinido é 16.



## Category
Accessing data
