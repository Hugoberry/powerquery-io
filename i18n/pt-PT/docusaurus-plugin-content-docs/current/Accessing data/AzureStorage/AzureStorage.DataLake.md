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

Devolve uma tabela de navegação que contém os documentos que se encontram no contentor especificado e as suas subpastas no URL da conta, <code>endpoint</code>, a partir de um sistema de ficheiros do Azure Data Lake Storage. <code>options</code> pode ser especificado para controlar as seguintes opções:    <ul><li><code>BlockSize</code> : O n&#250;mero de bytes a ler antes de aguardar pelo consumidor de dados. O valor predefinido &#233; de 4 MB.</li><li><code>RequestSize</code> : O n&#250;mero de bytes a tentar ler num &#250;nico pedido HTTP para o servidor. O valor predefinido &#233; de 4 MB.</li><li><code>ConcurrentRequests</code> : A op&#231;&#227;o ConcurrentRequests suporta o descarregamento de dados mais r&#225;pido, especificando o n&#250;mero de pedidos a serem feitos em paralelo, ao custo da utiliza&#231;&#227;o da mem&#243;ria. A mem&#243;ria necess&#225;ria &#233; (ConcurrentRequest \* RequestSize). O valor predefinido &#233; 16.</li><li><code>HierarchicalNavigation</code> : Uma l&#243;gica (verdadeiro/falso) que controla se os ficheiros s&#227;o devolvidos numa vista de diret&#243;rio tipo &#225;rvore ou numa lista n&#227;o hier&#225;rquica. O valor predefinido &#233; falso.</li></ul>



## Category
Accessing data
