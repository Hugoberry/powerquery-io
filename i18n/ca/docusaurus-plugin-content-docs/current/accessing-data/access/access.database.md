---
title: Access.Database
---

# Access.Database


Retorna una representació estructural d'una base de dades de l'Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

Retorna una representació estructural d'una base de dades de l'Access, `database`. Es pot especificar un paràmetre de registre opcional, `options`, per controlar les opcions següents:

-   `CreateNavigationProperties` : Disjunció lògica ("true" o "false") que estableix si cal generar propietats de navegació als valors retornats. El valor per defecte és "false".
-   `NavigationPropertyNameGenerator` : Funció que s'utilitza per crear noms de propietats de navegació.

El paràmetre de registre s'especifica amb el format \[opció1 = valor1, opció2 = valor2...\], per exemple.



## Category
Accessing data
