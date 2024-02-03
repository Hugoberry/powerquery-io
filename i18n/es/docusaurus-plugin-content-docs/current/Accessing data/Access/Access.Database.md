---
title: Access.Database
---

# Access.Database


## Description

Devuelve una representación estructural de una base de datos de Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Details

Devuelve una representación estructural de una base de datos de Access, <code>database</code>. Se puede especificar un parámetro de registro opcional, <code>options</code>, para controlar las opciones siguientes:    <ul><li><code>CreateNavigationProperties</code> : Un valor l&#243;gico (true o false) que establece si se deben generar propiedades de navegaci&#243;n en los valores devueltos (el valor predeterminado es false).</li><li><code>NavigationPropertyNameGenerator</code> : Una funci&#243;n que se usa para crear nombres para las propiedades de navegaci&#243;n.</li></ul>    El parámetro de registro se especifica como [option1 = value1, option2 = value2...], por ejemplo.



## Category
Accessing data
