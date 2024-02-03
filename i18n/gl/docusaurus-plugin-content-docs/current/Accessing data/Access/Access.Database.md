---
title: Access.Database
---

# Access.Database


## Description

Devolve unha representación estrutural dunha base de datos de Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Details

Devolve unha representación estrutural dunha base de datos de Access, <code>database</code>. Pode especificarse un parámetro de rexistro opcional, <code>options</code>, para controlar as seguintes opcións:    <ul><li><code>CreateNavigationProperties</code> : Unha l&#243;xica (true/false) que establece se xerar propiedades de navegaci&#243;n nos valores devoltos (o valor predefinido &#233; false).</li><li><code>NavigationPropertyNameGenerator</code> : Unha funci&#243;n que se usa para crear nomes de propiedades de navegaci&#243;n.</li></ul>    O parámetro de rexistro especifícase como [option1 = value1, option2 = value2...], por exemplo.



## Category
Accessing data
