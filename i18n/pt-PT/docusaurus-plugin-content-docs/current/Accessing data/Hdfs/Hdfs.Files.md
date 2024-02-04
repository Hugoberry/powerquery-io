---
title: Hdfs.Files
---

# Hdfs.Files


## Description

Devolve uma tabela que contém as propriedades e conteúdos dos ficheiros e pastas encontrados na pasta especificada e nas respetivas subpastas a partir de um sistema de ficheiros Hadoop.


## Syntax

```powerquery
Hdfs.Files(
    url as text
) as table
```


## Details

Devolve uma tabela que contém uma linha para cada pasta e ficheiro encontrados no URL da pasta, <code>url</code>, e nas respetivas subpastas a partir de um sistema de ficheiros Hadoop. Cada linha contém as propriedades do ficheiro e uma hiperligação para o respetivo conteúdo.



## Category
Accessing data
