---
title: HdInsight.Files
---

# HdInsight.Files


Devolve uma tabela que contém as propriedades e os conteúdos dos blobs encontrados no contentor especificado de um cofre de armazenamento Azure.


## Syntax

```powerquery
HdInsight.Files(
    account as text,
    containerName as text
) as table
```


## Remarks

Devolve uma tabela que contém uma linha para cada ficheiro blob encontrado no URL do contentor, <code>account</code>, de um cofre de armazemanento Azure. Cada linha contém propriedades do ficheiro e uma ligação para o respetivo conteúdo.



## Category
Accessing data
