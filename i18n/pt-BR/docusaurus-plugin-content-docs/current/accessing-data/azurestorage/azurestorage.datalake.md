---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


Retorna uma tabela navegacional contendo os documentos localizados no contêiner especificado e nas suas subpastas do Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Remarks

Retorna uma tabela de navegação que contém os documentos localizados no contêiner especificado e nas suas subpastas na URL da conta, `endpoint`, de um sistema de arquivos do Azure Data Lake Storage. É possível especificar `options` para controlar as seguintes opções:

-   `BlockSize` : O número de bytes a serem lidos antes de aguardar o consumidor de dados. O valor padrão é 4 MB.
-   `RequestSize` : O número de bytes cuja leitura será tentada em uma única solicitação HTTP para o servidor. O valor padrão é 4 MB.
-   `ConcurrentRequests` : A opção ConcurrentRequests dá suporte ao download mais rápido de dados por meio da especificação do número de solicitações a serem feitas em paralelo, ao custo da utilização de memória. A memória necessária é (ConcurrentRequest \* RequestSize). O valor padrão é 16.
-   `HierarchicalNavigation` : Uma lógica (true/false) que controla se os arquivos são retornados em um modo de exibição de diretório semelhante ao de árvore ou em uma lista plana. O valor padrão é false.



## Category
Accessing data
