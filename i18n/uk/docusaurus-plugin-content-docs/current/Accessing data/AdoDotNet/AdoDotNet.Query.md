---
title: AdoDotNet.Query
---

# AdoDotNet.Query


## Description

Повертає результати активного власного запиту щодо джерела даних ADO.NET.


## Syntax

```powerquery
AdoDotNet.Query(
    providerName as text,
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

Повертає результати активного запиту "<code>query</code>" з рядком підключення "<code>connectionString</code>" за допомогою ADO.NET-постачальника "<code>providerName</code>". Рядок "<code>connectionString</code>" може бути текстом або записом про пари значень властивостей. Значення властивості можуть виражатися текстом або числом. Можна вказати додатковий параметр запису (<code>options</code>), щоб указати додаткові властивості. Запис може містити такі поля:    <ul><li><code>CommandTimeout</code> : Дає змогу контролювати тривалість виконання запиту на сервері, після досягнення якої він скасовується. Стандартне значення – 10 хвилин.</li><li><code>SqlCompatibleWindowsAuth</code> : Параметр із логічним значенням (true або false), що визначає, чи створювати параметри сумісного із SQL Server рядка підключення для автентифікації Windows. Стандартне значення&#160;– true.</li></ul>



## Category
Accessing data
