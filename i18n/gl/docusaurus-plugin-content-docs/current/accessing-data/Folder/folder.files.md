---
title: Folder.Files
---

# Folder.Files


Devolve unha táboa co contido e as propiedades dos ficheiros localizados no cartafol e subcartafoles especificados.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

Devolve unha táboa que contén unha fila para cada ficheiro atopado no cartafol especificado e en todos os seus subcartafoles.

-   `path`: A ruta do cartafol do que desexa recuperar os ficheiros. O camiño do cartafol fornecido debe ser un camiño absoluto válido.
-   `options`: (Opcional) Este parámetro está actualmente destinado só a uso interno.

Cada fila da táboa devolta contén propiedades do ficheiro e unha ligazón ao seu contido.


## Examples

### Example #1
Devolve unha táboa que contén todos os ficheiros que se atopan en C:\\test-examples\\example-folder e todos os seus subcartafoles.
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data
