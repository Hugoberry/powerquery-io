---
title: Hdfs.Contents
---

# Hdfs.Contents


Devolve uma tabela que contém as propriedades e conteúdos dos ficheiros e pastas encontrados na pasta especificada a partir de um sistema de ficheiros Hadoop.


## Syntax

```powerquery
Hdfs.Contents(
    url as text
) as table
```


## Remarks

Devolve uma tabela que contém uma linha para cada pasta e ficheiro encontrados no URL da pasta, <code>url</code>, a partir de um sistema de ficheiros Hadoop. Cada linha contém as propriedades da pasta ou ficheiro e uma hiperligação para o respetivo conteúdo.



## Category
Accessing data
