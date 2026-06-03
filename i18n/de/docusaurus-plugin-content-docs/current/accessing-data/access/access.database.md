---
title: Access.Database
---

# Access.Database


Gibt eine strukturelle Darstellung einer Access-Datenbank zurück.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

Gibt eine strukturelle Darstellung einer Access-Datenbank zurück: `database`. Der optionale Datensatzparameter „`options`“ kann angegeben werden, um die folgenden Optionen zu steuern:

-   `CreateNavigationProperties` : Ein logischer Wert (TRUE/FALSE), der festlegt, ob für die zurückgegebenen Werte Navigationseigenschaften generiert werden sollen (Standardwert: FALSE).
-   `NavigationPropertyNameGenerator` : Eine Funktion, die zur Erstellung von Namen für Navigationseigenschaften verwendet wird.

Der Datensatzparameter wird beispielsweise als \[option1 = value1, option2 = value2...\] angegeben.



## Category
Accessing data
