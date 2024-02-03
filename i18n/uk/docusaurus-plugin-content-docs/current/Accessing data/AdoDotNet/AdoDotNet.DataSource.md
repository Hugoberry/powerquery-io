---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


## Description

Повертає колекцію схем для джерела даних ADO.NET.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Details

Повертає колекцію схем для джерела даних ADO.NET з іменем постачальника "<code>providerName</code>" і рядком підключення "<code>connectionString</code>". Рядок "<code>connectionString</code>" може бути текстом або записом пар значень властивостей. Значення властивості можуть бути текстом або цифрами. Можна вказати додатковий параметр запису (<code>options</code>), щоб указати додаткові властивості. Запис може містити такі поля:    <ul><li><code>CommandTimeout</code> : Дає змогу контролювати тривалість виконання запиту на сервері, після досягнення якої він скасовується. Стандартне значення – 10 хвилин.</li><li><code>SqlCompatibleWindowsAuth</code> : Параметр із логічним значенням (true або false), що визначає, чи створювати параметри сумісного із SQL Server рядка підключення для автентифікації Windows. Стандартне значення&#160;– true.</li><li><code>TypeMap</code></li></ul>



## Category
Accessing data
