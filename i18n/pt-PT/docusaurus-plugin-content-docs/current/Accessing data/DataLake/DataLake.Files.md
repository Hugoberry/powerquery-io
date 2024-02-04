---
title: DataLake.Files
---

# DataLake.Files


## Description

Introduza o URL da sua conta do Azure Data Lake Storage.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Details

Devolve uma tabela com uma linha para cada ficheiro presente no <code>url</code> do Azure Data Lake Storage Gen1. Cada linha contém as propriedades da pasta ou do ficheiro e uma ligação para o respetivo conteúdo.


