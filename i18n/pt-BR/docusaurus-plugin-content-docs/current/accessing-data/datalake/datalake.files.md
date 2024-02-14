---
title: DataLake.Files
---

# DataLake.Files


Insira a URL da sua conta do Azure Data Lake Storage.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Retorna uma tabela contendo uma linha para cada arquivo localizado na <code>URL</code> do Azure Data Lake Storage Gen1. Cada linha contém as propriedades do arquivo e um link para o seu conteúdo.


