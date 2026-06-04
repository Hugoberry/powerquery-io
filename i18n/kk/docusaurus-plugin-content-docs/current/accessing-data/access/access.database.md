---
title: Access.Database
---

# Access.Database


Access дерекқорының құрылымдық көрінісін қайтарады.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

Access дерекқорының құрылымдық көрінісін қайтарады, `database`. Қосымша жазба параметрі, `options`, келесі параметрлерді басқару үшін көрсетілуі мүмкін:

-   `CreateNavigationProperties` : Қайтарылатын мәндерде навигация сипаттарын жасау немесе жасамау керектігін көрсететін логикалық мән (true/false). Әдепкі мән - false.
-   `NavigationPropertyNameGenerator` : Навигация сипаттарының атауларын жасау үшін пайдаланылатын функция.

Жазба параметрі мысалы ретінде \[option1 = value1, option2 = value2...\] көрсетіледі.



## Category
Accessing data
