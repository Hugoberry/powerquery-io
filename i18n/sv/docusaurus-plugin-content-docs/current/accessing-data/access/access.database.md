---
title: Access.Database
---

# Access.Database


Returnerar en strukturell representation av en Access-databas.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

Returnerar en strukturell representation av Access-databasen `database`. En valfri postparameter `options`, kan anges för att styra följande alternativ:

-   `CreateNavigationProperties` : Ett logiskt värde (sant/falskt) som anger huruvida navigeringsegenskaper ska genereras för returnerade värden eller inte (standard är sant).
-   `NavigationPropertyNameGenerator` : En funktion som används för att skapa namn för navigeringsegenskaper.

Postparametern anges exempelvis som \[option1 = value1, option2 = value2...\].



## Category
Accessing data
