---
title: Netezza.Database
---

# Netezza.Database


## Description

Імпорт даних із бази даних IBM Netezza.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Повертає таблицю з поданнями, збереженими функціями й таблицями Netezza з бази даних Netezza Server <code>database</code> на сервер <code>server</code>. Разом із сервером можна додатково вказати порт, відділивши його двокрапкою. Можна вказати додатковий параметр запису <code>options</code>, щоб керувати вказаними нижче параметрами.<ul>        <li><code>CreateNavigationProperties</code>: логічне значення (true/false), яке визначає, чи створювати для повернених значень властивості навігації (стандартне значення – true).</li>        <li><code>HierarchicalNavigation</code>: логічне значення (true/false), яке визначає, чи групувати таблиці для перегляду за назвами їх схем (стандартне значення – false).</li>        <li><code>ConnectionTimeout</code>: параметр тривалості, який визначає, як довго очікувати на підключення до сервера, перш ніж перервати спробу. Стандартне значення залежить від драйвера.</li>        <li><code>CommandTimeout</code>: параметр тривалості, який визначає, як довго запиту на боці сервера дозволено працювати до скасування. Стандартне значення залежить від драйвера.</li><li><code>NormalizeDatabaseName</code>: Логічне значення (true/false), яке встановлює, чи слід нормалізувати ім'я бази даних у верхньому регістрі чи дослівно інтерпретувати його (стандартне значення – true).</li></ul>Параметр запису вказується в такому форматі: [параметр1 = значення1, параметр2 = значення2…].


## Examples

### Example #1 
Перелік таблиць у проекті IBM Netezza.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



