---
title: Folder.Files
---

# Folder.Files


Retorna uma tabela contendo as propriedades e o conteúdo dos arquivos encontrados na pasta especificada e respectivas subpastas.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

Retorna uma tabela contendo uma linha para cada arquivo encontrado na pasta <code>path</code> e todas as suas subpastas. Cada linha contém propriedades do arquivo e um link para seu conteúdo. O parâmetro <code>options</code> é atualmente destinado apenas para uso interno.



## Category
Accessing data
