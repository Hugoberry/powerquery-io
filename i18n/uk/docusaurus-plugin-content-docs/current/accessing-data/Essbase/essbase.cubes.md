---
title: Essbase.Cubes
---

# Essbase.Cubes


Повертає куби в екземплярі Essbase, згруповані за сервером Essbase.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Remarks

Повертає таблицю кубів, згрупованих за сервером Essbase, з екземпляра Essbase на сервері APS "`url`". Ви можете вказати додатковий параметр запису "`options`", щоб керувати такими параметрами:

-   `CommandTimeout` : Дає змогу контролювати тривалість виконання запиту на сервері, після досягнення якої він скасовується. Стандартне значення – 10 хвилин.



## Category
Accessing data
