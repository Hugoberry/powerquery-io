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

Devolve uma tabela de navegação que contém uma linha para cada contentor encontrado no URL da conta, <code>account</code>, a partir de um cofre de armazenamento do Azure. Cada linha contém uma ligação para os blobs do contentor. <code>options</code> pode ser especificado para controlar as seguintes opções:    <ul><li><code>BlockSize</code> : O n&#250;mero de bytes a ler antes de aguardar pelo consumidor de dados. O valor predefinido &#233; de 4 MB.</li><li><code>RequestSize</code> : O n&#250;mero de bytes a tentar ler num &#250;nico pedido HTTP para o servidor. O valor predefinido &#233; de 4 MB.</li><li><code>ConcurrentRequests</code> : A op&#231;&#227;o ConcurrentRequests suporta o descarregamento de dados mais r&#225;pido, especificando o n&#250;mero de pedidos a serem feitos em paralelo, ao custo da utiliza&#231;&#227;o da mem&#243;ria. A mem&#243;ria necess&#225;ria &#233; (ConcurrentRequest \* RequestSize). O valor predefinido &#233; 16.</li></ul>



## Category
Accessing data
