---
title: Access.Database
---

# Access.Database


Devuelve una representación estructural de una base de datos de Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

Devuelve una representación estructural de una base de datos de Access, `database`. Se puede especificar un parámetro de registro opcional (`options`) para controlar las opciones siguientes:

-   `CreateNavigationProperties` : Un valor lógico (true o false) que establece si se deben generar propiedades de navegación en los valores devueltos (el valor predeterminado es false).
-   `NavigationPropertyNameGenerator` : Una función que se usa para crear nombres para las propiedades de navegación.

El parámetro de registro se especifica como \[option1 = value1, option2 = value2...\], por ejemplo.



## Category
Accessing data
