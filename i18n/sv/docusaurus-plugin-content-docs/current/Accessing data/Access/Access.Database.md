---
title: Access.Database
---

# Access.Database


## Description

Returnerar en strukturell representation av en Access-databas.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Details

Returnerar en strukturell representation av Access-databasen <code>database</code>. Du kan ange en valfri postparameter, <code>options</code>, om du vill styra följande alternativ:    <ul><li><code>CreateNavigationProperties</code> : Ett logiskt v&#228;rde (sant/falskt) som anger huruvida navigeringsegenskaper ska genereras f&#246;r returnerade v&#228;rden eller inte (standard &#228;r sant).</li><li><code>NavigationPropertyNameGenerator</code> : En funktion som anv&#228;nds f&#246;r att skapa namn f&#246;r navigeringsegenskaper.</li></ul>    Postparametern anges t.ex. som [option1 = value1, option2 = value2...].



## Category
Accessing data
