---
title: HdInsight.Files
---

# HdInsight.Files


Retorna uma tabela contendo as propriedades e conteúdos dos blobs encontrados no contêiner especificado de um cofre de armazenamento do Azure.


## Syntax

```powerquery
HdInsight.Files(
    account as text,
    containerName as text
) as table
```


## Remarks

Retorna uma tabela contendo uma linha para cada arquivo de blob encontrado na URL do contêiner, <code>account</code>, de um cofre de armazenamento do Azure. Cada linha contém propriedades do arquivo e um link para seu conteúdo.



## Category
Accessing data
