---
title: Folder.Files
---

# Folder.Files


Gibt eine Tabelle mit den Eigenschaften und Inhalten der Dateien des angegebenen Ordners und der Unterordner zurück.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

Gibt eine Tabelle zurück, die eine Zeile für jede Datei enthält, die sich im angegebenen Ordner und allen zugehörigen Unterordnern befindet.

-   `path`: Der Pfad zu dem Ordner, aus dem Sie die Dateien abrufen möchten. Der angegebene Ordnerpfad muss ein gültiger absoluter Pfad sein.
-   `options`: (Optional) Dieser Parameter ist derzeit nur für die interne Verwendung vorgesehen.

Jede Zeile der zurückgegebenen Tabelle enthält Eigenschaften der Datei und einen Link zu ihrem Inhalt.


## Examples

### Example #1
Gibt eine Tabelle zurück, die alle Dateien in „C:\\test-examples\\example-folder“ und alle zugehörigen Unterordner enthält.
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data
