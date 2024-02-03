---
title: HdInsight.Contents
---

# HdInsight.Contents


## Description

Retorna uma tabela navegacional contendo os contêineres encontrados na conta especificada de um cofre de armazenamento do Azure.


## Syntax

```powerquery
HdInsight.Contents(
    account as text
) as table
```


## Details

Retorna uma tabela navegacional contendo uma linha para cada contêiner encontrado na URL da conta, <code>account</code>, em um cofre de armazenamento do Azure. Cada linha contém um link para os blobs do contêiner.



## Category
Accessing data
