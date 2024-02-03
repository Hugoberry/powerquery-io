---
title: Essbase.Cubes
---

# Essbase.Cubes


## Description

Повертає куби в екземплярі Essbase, згруповані за сервером Essbase.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Details

Повертає таблицю кубів, згрупованих за сервером Essbase, з екземпляра Essbase на сервері APS "<code>url</code>". Ви можете вказати додатковий параметр запису "<code>options</code>", щоб керувати такими параметрами:    <ul><li><code>CommandTimeout</code> : Дає змогу контролювати тривалість виконання запиту на сервері, після досягнення якої він скасовується. Стандартне значення – 10 хвилин.</li></ul>



## Category
Accessing data
