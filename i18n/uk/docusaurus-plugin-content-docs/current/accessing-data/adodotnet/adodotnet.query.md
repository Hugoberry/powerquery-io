---
title: AdoDotNet.Query
---

# AdoDotNet.Query


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


## Remarks

Повертає результати активного запиту "`query`" з рядком підключення "`connectionString`" за допомогою ADO.NET-постачальника "`providerName`". Рядок "`connectionString`" може бути текстом або записом про пари значень властивостей. Значення властивості можуть виражатися текстом або числом. Можна вказати додатковий параметр запису (`options`), щоб указати додаткові властивості. Запис може містити такі поля:

-   `CommandTimeout` : Дає змогу контролювати тривалість виконання запиту на сервері, після досягнення якої він скасовується. Стандартне значення – 10 хвилин.
-   `SqlCompatibleWindowsAuth` : Параметр із логічним значенням (true або false), що визначає, чи створювати параметри сумісного із SQL Server рядка підключення для автентифікації Windows. Стандартне значення – true.



## Category
Accessing data
