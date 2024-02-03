---
title: Access.Database
---

# Access.Database


## Description

Access дерекқорының құрылымдық көрінісін қайтарады.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Details

Access дерекқорының құрылымдық көрінісін қайтарады, <code>database</code>. Қосымша жазба параметрі, <code>options</code>, мына параметрлерді бақылау үшін көрсетілуі мүмкін:    <ul><li><code>CreateNavigationProperties</code> : Қайтарылатын мәндерде навигация сипаттарын жасау немесе жасамау керектігін көрсететін логикалық мән (true/false). Әдепкі мән - false.</li><li><code>NavigationPropertyNameGenerator</code> : Навигация сипаттарының атауларын жасау үшін пайдаланылатын функция.</li></ul>    Жазба параметрі мысалы былай көрсетіледі [option1 = value1, option2 = value2...].



## Category
Accessing data
