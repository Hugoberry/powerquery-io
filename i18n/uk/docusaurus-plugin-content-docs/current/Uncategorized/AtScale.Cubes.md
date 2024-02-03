---
title: AtScale.Cubes
---

# AtScale.Cubes


## Description

Дає змогу імпортувати або отримати методом DirectQuery дані кубів з AtScale.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Details

Повертає дані кубів з AtScale на сервері <code>server</code>. Можна вказати додатковий параметр запису <code>options</code>, щоб керувати наведеними нижче параметрами.<ul>        <li><code>TypedMeasureColumns</code>: логічне значення, що визначає, чи використовувати в доданих стовпцях мір типи, указані в багатовимірній або табличній моделі. Якщо вказати значення false, для всіх стовпців мір використовуватиметься тип "number". Стандартне значення цього параметра – false.</li>        <li><code>CommandTimeout</code>: параметр тривалості (у секундах), що визначає, як довго дозволено працювати запиту на боці сервера до скасування. Стандартне значення залежить від драйвера. </li>        <li><code>ConnectionTimeout</code>: параметр тривалості (у секундах), що визначає, як довго очікувати на підключення до сервера, перш ніж перервати спробу. Стандартне значення залежить від драйвера. </li></ul>Параметр запису вказується, наприклад, так: [параметр1 = значення1, параметр2 = значення2…].

