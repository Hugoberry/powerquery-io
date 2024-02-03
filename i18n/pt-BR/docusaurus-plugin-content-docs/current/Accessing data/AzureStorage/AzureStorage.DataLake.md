---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


## Description

Retorna uma tabela navegacional contendo os documentos localizados no contêiner especificado e nas suas subpastas do Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Details

Retorna uma tabela de navegação que contém os documentos localizados no contêiner especificado e nas suas subpastas na URL da conta, <code>endpoint</code>, de um sistema de arquivos do Azure Data Lake Storage. É possível especificar <code>options</code> para controlar as seguintes opções:    <ul><li><code>BlockSize</code> : O n&#250;mero de bytes a serem lidos antes de aguardar o consumidor de dados. O valor padr&#227;o &#233; 4 MB.</li><li><code>RequestSize</code> : O n&#250;mero de bytes cuja leitura ser&#225; tentada em uma &#250;nica solicita&#231;&#227;o HTTP para o servidor. O valor padr&#227;o &#233; 4 MB.</li><li><code>ConcurrentRequests</code> : A op&#231;&#227;o ConcurrentRequests d&#225; suporte ao download mais r&#225;pido de dados por meio da especifica&#231;&#227;o do n&#250;mero de solicita&#231;&#245;es a serem feitas em paralelo, ao custo da utiliza&#231;&#227;o de mem&#243;ria. A mem&#243;ria necess&#225;ria &#233; (ConcurrentRequest \* RequestSize). O valor padr&#227;o &#233; 16.</li><li><code>HierarchicalNavigation</code> : Uma l&#243;gica (true/false) que controla se os arquivos s&#227;o retornados em um modo de exibi&#231;&#227;o de diret&#243;rio semelhante ao de &#225;rvore ou em uma lista plana. O valor padr&#227;o &#233; false.</li></ul>



## Category
Accessing data
