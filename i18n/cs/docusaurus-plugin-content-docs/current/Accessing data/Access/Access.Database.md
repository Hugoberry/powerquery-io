---
title: Access.Database
---

# Access.Database


## Description

Vrátí strukturální reprezentaci databáze aplikace Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Details

Vrací strukturální reprezentaci databáze Access <code>database</code>. Zadáním volitelného parametru záznamu <code>options</code> můžete řídit následující možnosti:    <ul><li><code>CreateNavigationProperties</code> : Logick&#253; parametr (true/false), kter&#253; nastavuje, jestli se maj&#237; u vr&#225;cen&#253;ch hodnot generovat navigačn&#237; vlastnosti (v&#253;choz&#237; hodnota je false).</li><li><code>NavigationPropertyNameGenerator</code> : Funkce použ&#237;van&#225; ke generov&#225;n&#237; n&#225;zvů navigačn&#237;ch vlastnost&#237;.</li></ul>    Parametr záznamu se zadává například ve formátu [možnost1 = hodnota1, možnost2 = hodnota2...].



## Category
Accessing data
