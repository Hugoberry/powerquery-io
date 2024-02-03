---
title: OleDb.Query
---

# OleDb.Query


## Description

Повертає результати виконання власного запиту з бази даних OLE.


## Syntax

```powerquery
OleDb.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

Повертає результат <code>query</code> з рядком підключення "<code>connectionString</code>" за допомогою OLE DB. "<code>connectionString</code>" може вказуватися як текст або запис із пар значень властивостей. Значення властивостей можуть бути текстові або числові. Можна вказати додатковий параметр запису (<code>options</code>), щоб визначити додаткові властивості. Запис може містити такі поля:    <ul><li><code>ConnectionTimeout</code> : Дає змогу контролювати тривалість очікування для спроби встановити підключення до сервера, після досягнення якої спроба переривається. Стандартне значення залежить від драйвера.</li><li><code>CommandTimeout</code> : Дає змогу контролювати тривалість виконання запиту на сервері, після досягнення якої він скасовується. Стандартне значення – 10 хвилин.</li><li><code>SqlCompatibleWindowsAuth</code> : Параметр із логічним значенням (true або false), що визначає, чи створювати параметри сумісного із SQL Server рядка підключення для автентифікації Windows. Стандартне значення&#160;– true.</li></ul>



## Category
Accessing data
