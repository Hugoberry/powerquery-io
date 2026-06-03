---
title: Folder.Files
---

# Folder.Files


Returnerar en tabell som innehåller egenskaperna och innehållet i filerna i den angivna mappen och undermapparna.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

Returnerar en tabell som innehåller en rad för varje fil som finns i den angivna mappen och alla dess undermappar.

-   `path`: Sökvägen till mappen som du vill hämta filerna från. Den angivna mappsökvägen måste vara en giltig, absolut sökväg.
-   `options`: (Valfritt) Den här parametern är för närvarande endast avsedd för internt bruk.

Varje rad i den returnerade tabellen innehåller egenskaper för filen och en länk till dess innehåll.


## Examples

### Example #1
Returnera en tabell som innehåller alla filer som finns i C:\\test-examples\\example-folder och alla dess undermappar.
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data
