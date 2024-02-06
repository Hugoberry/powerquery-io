---
title: Access.Database
---

# Access.Database


Returnerer en strukturel repræsentation af en Access-database.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

Returnerer en strukturel repræsentation af en Access-database, <code>database</code>. Du kan angive en valgfri postparameter, <code>options</code>, der styrer følgende indstillinger:    <ul><li><code>CreateNavigationProperties</code> : En logisk v&#230;rdi (true/false), der angiver, om der skal genereres navigationsegenskaber p&#229; de returnerede v&#230;rdier (standard er false).</li><li><code>NavigationPropertyNameGenerator</code> : En funktion, der anvendes til at oprette navne til navigationsegenskaber.</li></ul>    Postparameteren er angivet som f.eks. [option1 = value1, option2 = value2...].



## Category
Accessing data
