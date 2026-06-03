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

Devolve uma tabela que contém uma linha para cada ficheiro encontrado na pasta especificada e em todas as suas subpastas.

-   `path`: o caminho para a pasta de onde pretende recuperar os ficheiros. O caminho da pasta fornecido tem de ser um caminho absoluto válido.
-   `options`: (Opcional) Este parâmetro destina-se atualmente apenas a utilização interna.

Cada linha da tabela devolvida contém propriedades do ficheiro e uma ligação para o seu conteúdo.


## Examples

### Example #1
Devolver uma tabela que contém todos os ficheiros encontrados em C:\\test-examples\\example-folder e em todas as suas subpastas.
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data
