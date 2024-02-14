---
title: Folder.Contents
---

# Folder.Contents


Retorna uma tabela que contém as propriedades e o conteúdo dos arquivos e das pastas encontrados na pasta especificada.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Remarks

Retorna uma tabela contendo uma linha para cada pasta e arquivo encontrado na pasta <code>path</code>. Cada linha contém propriedades da pasta ou arquivo e um link para seu conteúdo. O parâmetro <code>options</code> é atualmente destinado apenas para uso interno.



## Category
Accessing data
