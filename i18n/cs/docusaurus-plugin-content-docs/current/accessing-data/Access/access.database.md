---
title: Access.Database
---

# Access.Database


Vrátí strukturální reprezentaci databáze aplikace Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

Vrací strukturální reprezentaci databáze Access `database`. Zadáním volitelného parametru záznamu `options` můžete řídit následující možnosti:

-   `CreateNavigationProperties` : Logický parametr (true/false), který nastavuje, jestli se mají u vrácených hodnot generovat navigační vlastnosti (výchozí hodnota je false).
-   `NavigationPropertyNameGenerator` : Funkce používaná ke generování názvů navigačních vlastností.

Parametr záznamu se zadává například ve formátu \[možnost1 = hodnota1, možnost2 = hodnota2...\].



## Category
Accessing data
