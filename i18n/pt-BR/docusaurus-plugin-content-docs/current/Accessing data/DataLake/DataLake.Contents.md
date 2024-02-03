---
title: DataLake.Contents
---

# DataLake.Contents


## Description

Insira a URL da sua conta do Azure Data Lake Storage Gen1.


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Details

Retorna uma tabela contendo uma linha para cada pasta e arquivo localizados na <code>URL</code> do Azure Data Lake Storage Gen1. Cada linha contém as propriedades da pasta ou do arquivo e um link para o seu conteúdo.


