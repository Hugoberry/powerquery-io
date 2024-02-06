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

Retorna uma tabela de navegação que contém uma linha para cada contêiner encontrado na URL da conta, <code>account</code>, de um cofre do Armazenamento do Azure. Cada linha contém um link para os blobs do contêiner. É possível especificar <code>options</code> para controlar as seguintes opções:    <ul><li><code>BlockSize</code> : O n&#250;mero de bytes a serem lidos antes de aguardar o consumidor de dados. O valor padr&#227;o &#233; 4 MB.</li><li><code>RequestSize</code> : O n&#250;mero de bytes cuja leitura ser&#225; tentada em uma &#250;nica solicita&#231;&#227;o HTTP para o servidor. O valor padr&#227;o &#233; 4 MB.</li><li><code>ConcurrentRequests</code> : A op&#231;&#227;o ConcurrentRequests d&#225; suporte ao download mais r&#225;pido de dados por meio da especifica&#231;&#227;o do n&#250;mero de solicita&#231;&#245;es a serem feitas em paralelo, ao custo da utiliza&#231;&#227;o de mem&#243;ria. A mem&#243;ria necess&#225;ria &#233; (ConcurrentRequest \* RequestSize). O valor padr&#227;o &#233; 16.</li></ul>



## Category
Accessing data
