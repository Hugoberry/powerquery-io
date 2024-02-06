---
title: DataLake.Contents
---

# DataLake.Contents


Introduza o URL da sua conta do Azure Data Lake Storage Gen1.


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Devolve uma tabela com uma linha para cada pasta e ficheiro presentes no <code>url</code> do Azure Data Lake Storage Gen1. Cada linha contém as propriedades da pasta ou do ficheiro e uma ligação para o respetivo conteúdo.


