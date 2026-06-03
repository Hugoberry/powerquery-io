---
title: Folder.Files
---

# Folder.Files


Devuelve una tabla que contiene las propiedades y el contenido de las carpetas y los archivos encontrados en la carpeta y las subcarpetas especificadas.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

Devuelve una tabla que contiene una fila para cada archivo que se encuentra en la carpeta especificada y en todas sus subcarpetas.

-   `path`: la ruta a la carpeta desde la que quiere recuperar los archivos. La ruta de acceso a la carpeta proporcionada debe ser una ruta de acceso absoluta válida.
-   `options`: (opcional) este parámetro está destinado actualmente a uso interno únicamente.

Cada fila de la tabla devuelta contiene propiedades del archivo y un vínculo a su contenido.


## Examples

### Example #1
Devuelve una tabla que contiene todos los archivos encontrados en C:\\test-examples\\example-folder y todas sus subcarpetas.
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data
