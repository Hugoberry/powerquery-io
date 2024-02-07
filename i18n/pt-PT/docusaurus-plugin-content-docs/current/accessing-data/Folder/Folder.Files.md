---
title: Folder.Files
---

# Folder.Files


Devolve uma tabela que contém as propriedades e conteúdos dos ficheiros encontrados na pasta especificada e nas respetivas subpastas.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

Devolve uma tabela que contém uma linha para cada ficheiro encontrados na pasta <code>path</code> e nas respetivas subpastas. Cada linha contém as propriedades do ficheiro e uma hiperligação para o respetivo conteúdo. O parâmetro <code>options</code> destina-se atualmente apenas a utilização interna.



## Category
Accessing data
