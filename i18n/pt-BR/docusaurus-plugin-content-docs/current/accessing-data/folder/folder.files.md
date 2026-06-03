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

Retorna uma tabela que contém uma linha para cada arquivo encontrado na pasta especificada e em todas as suas subpastas.

-   `path`: o caminho para a pasta da qual você deseja recuperar os arquivos. O caminho de pasta fornecido deve ser um caminho absoluto válido.
-   `options`: (Opcional) Atualmente, este parâmetro destina-se apenas a uso interno.

Cada linha da tabela retornada contém propriedades do arquivo e um link para seu conteúdo.


## Examples

### Example #1
Retornar uma tabela que contém todos os arquivos encontrados em C:\\test-examples\\example-folder e todas as suas subpastas.
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data
