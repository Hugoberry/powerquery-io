---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


Повертає колекцію схем для джерела даних ADO.NET.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Повертає колекцію схем для джерела даних ADO.NET з іменем постачальника "`providerName`" і рядком підключення "`connectionString`". Рядок "`connectionString`" може бути текстом або записом пар значень властивостей. Значення властивості можуть бути текстом або цифрами. Можна вказати додатковий параметр запису (`options`), щоб указати додаткові властивості. Запис може містити такі поля:

-   `CommandTimeout` : Дає змогу контролювати тривалість виконання запиту на сервері, після досягнення якої він скасовується. Стандартне значення – 10 хвилин.
-   `SqlCompatibleWindowsAuth` : Параметр із логічним значенням (true або false), що визначає, чи створювати параметри сумісного із SQL Server рядка підключення для автентифікації Windows. Стандартне значення – true.
-   `TypeMap`



## Category
Accessing data
