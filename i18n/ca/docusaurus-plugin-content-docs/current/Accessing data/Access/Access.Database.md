---
title: Access.Database
---

# Access.Database


## Description

Retorna una representació estructural d&#39;una base de dades de l&#39;Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Details

Retorna una representació estructural d'una base de dades de l'Access, <code>database</code>. Es pot especificar un paràmetre de registre opcional, <code>options</code>, per controlar les opcions següents:    <ul><li><code>CreateNavigationProperties</code> : Disjunci&#243; l&#242;gica (&quot;true&quot; o &quot;false&quot;) que estableix si cal generar propietats de navegaci&#243; als valors retornats. El valor per defecte &#233;s &quot;false&quot;.</li><li><code>NavigationPropertyNameGenerator</code> : Funci&#243; que s&#39;utilitza per crear noms de propietats de navegaci&#243;.</li></ul>    El paràmetre de registre s'especifica com a [opció1 = valor1, opció2 = valor2...], per exemple.



## Category
Accessing data
