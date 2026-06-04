---
title: Access.Database
---

# Access.Database


Devolve unha representación estrutural dunha base de datos de Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

Devolve unha representación estrutural dunha base de datos de Access, `database` . Pódese especificar un parámetro de rexistro opcional, `options` , para controlar as seguintes opcións:

-   `CreateNavigationProperties` : Unha lóxica (true/false) que establece se xerar propiedades de navegación nos valores devoltos (o valor predefinido é false).
-   `NavigationPropertyNameGenerator` : Unha función que se usa para crear nomes de propiedades de navegación.

O parámetro de rexistro especifícase como \[opción1 = valor1, opción2 = valor2...\], por exemplo.



## Category
Accessing data
