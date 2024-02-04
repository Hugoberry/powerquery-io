---
title: HdInsight.Containers
---

# HdInsight.Containers


## Description

Devolve uma tabela de navegação que contém os contentores encontrados na conta especificada a partir de um cofre de armazenamento do Azure.


## Syntax

```powerquery
HdInsight.Containers(
    account as text
) as table
```


## Details

Devolve uma tabela de navegação que contém uma linha para cada contentor encontrado no URL da conta, <code>account</code>, a partir de um cofre de armazenamento do Azure. Cada linha contém uma ligação para os blobs do contentor.



## Category
Accessing data
