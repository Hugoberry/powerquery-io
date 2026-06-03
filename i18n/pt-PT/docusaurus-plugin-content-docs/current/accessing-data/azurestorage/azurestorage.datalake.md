---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


Devolve uma tabela de navegação que contém os documentos que se encontram no contentor especificado e as suas subpastas do Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Remarks

Devolve uma tabela de navegação que contém os documentos que se encontram no contentor especificado e as suas subpastas no URL da conta, `endpoint`, a partir de um sistema de ficheiros do Azure Data Lake Storage. `options` pode ser especificado para controlar as seguintes opções:

-   `BlockSize` : O número de bytes a ler antes de aguardar pelo consumidor de dados. O valor predefinido é de 4 MB.
-   `RequestSize` : O número de bytes a tentar ler num único pedido HTTP para o servidor. O valor predefinido é de 4 MB.
-   `ConcurrentRequests` : A opção ConcurrentRequests suporta o descarregamento de dados mais rápido, especificando o número de pedidos a serem feitos em paralelo, ao custo da utilização da memória. A memória necessária é (ConcurrentRequest \* RequestSize). O valor predefinido é 16.
-   `HierarchicalNavigation` : Uma lógica (verdadeiro/falso) que controla se os ficheiros são devolvidos numa vista de diretório tipo árvore ou numa lista não hierárquica. O valor predefinido é falso.



## Category
Accessing data
