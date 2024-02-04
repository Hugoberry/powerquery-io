---
title: Folder.Contents
---

# Folder.Contents


## Description

Devolve uma tabela que contém as propriedades e conteúdos dos ficheiros e pastas encontrados na pasta especificada.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Details

Devolve uma tabela que contém uma linha para cada pasta e ficheiro encontrados na pasta <code>path</code>. Cada linha contém as propriedades da pasta ou ficheiro e uma hiperligação para o respetivo conteúdo. O parâmetro <code>options</code> destina-se atualmente apenas a utilização interna.



## Category
Accessing data
