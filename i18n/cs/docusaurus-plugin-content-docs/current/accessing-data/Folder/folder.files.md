---
title: Folder.Files
---

# Folder.Files


Vrátí tabulku obsahující vlastnosti a obsah souborů a složek nalezených v zadané složce a jejích podsložkách.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

Vrátí tabulku obsahující řádek pro každý soubor nalezený v zadané složce a všech jejích podsložkách.

 -   `path`: Cesta ke složce, ze které chcete soubory načíst. Poskytnutá cesta ke složce musí být platná absolutní cesta.
-   `options`: (Volitelné) Tento parametr je v současné době určen pouze pro interní použití.

  Každý řádek vrácené tabulky obsahuje vlastnosti souboru a odkaz na jeho obsah.


## Examples

### Example #1
Vrátí tabulku obsahující všechny soubory nalezené v C:\\test-examples\\example-folder a ve všech jejích podsložkách.
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data
