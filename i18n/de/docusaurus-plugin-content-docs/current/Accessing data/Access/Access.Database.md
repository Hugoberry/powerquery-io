---
title: Access.Database
---

# Access.Database


## Description

Gibt eine strukturelle Darstellung einer Access-Datenbank zurück.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Details

Gibt eine strukturelle Darstellung einer Access-Datenbank zurück: <code>database</code>. Ein optionaler Datensatzparameter "<code>options</code>" kann angegeben werden, um die folgenden Optionen zu steuern:    <ul><li><code>CreateNavigationProperties</code> : Ein logischer Wert (TRUE/FALSE), der festlegt, ob f&#252;r die zur&#252;ckgegebenen Werte Navigationseigenschaften generiert werden sollen (Standardwert: FALSE).</li><li><code>NavigationPropertyNameGenerator</code> : Eine Funktion, die zur Erstellung von Namen f&#252;r Navigationseigenschaften verwendet wird.</li></ul>    Der Datensatzparameter wird beispielsweise als [option1 = value1, option2 = value2...] angegeben.



## Category
Accessing data
