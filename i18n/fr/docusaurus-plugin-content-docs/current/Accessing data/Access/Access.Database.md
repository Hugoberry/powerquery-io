---
title: Access.Database
---

# Access.Database


## Description

Retourne une représentation structurelle d&#39;une base de données Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Details

Retourne une représentation structurelle d'une base de données Access, <code>database</code>. Vous pouvez spécifier un paramètre d'enregistrement facultatif, <code>options</code>, pour contrôler les options suivantes :    <ul><li><code>CreateNavigationProperties</code> : Valeur logique (true/false) qui indique si des propri&#233;t&#233;s de navigation doivent &#234;tre g&#233;n&#233;r&#233;es pour les valeurs retourn&#233;es (valeur par d&#233;faut&#160;: false).</li><li><code>NavigationPropertyNameGenerator</code> : Fonction utilis&#233;e pour la cr&#233;ation des noms de propri&#233;t&#233;s de navigation.</li></ul>    Le paramètre d'enregistrement est indiqué sous la forme [option1 = value1, option2 = value2...], par exemple.



## Category
Accessing data
