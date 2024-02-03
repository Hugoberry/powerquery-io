---
title: Odbc.Query
---

# Odbc.Query


## Description

Повертає результат виконання власного запиту з джерела даних ODBC.


## Syntax

```powerquery
Odbc.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

Повертає результат <code>query</code> з рядком підключення "<code>connectionString</code>" за допомогою ODBC. "<code>connectionString</code>" може бути текстом або записом пар значень властивостей. Значення властивостей можуть мати текстовий або числовий формат. Можна вказати додатковий параметр запису (<code>options</code>), щоб задати додаткові властивості. Запис може містити такі поля:    <ul><li><code>ConnectionTimeout</code> : Дає змогу контролювати тривалість очікування для спроби встановити підключення до сервера, після досягнення якої спроба переривається. Стандартне значення – 15 секунд.</li><li><code>CommandTimeout</code> : Дає змогу контролювати тривалість виконання запиту на сервері, після досягнення якої він скасовується. Стандартне значення – 10 хвилин.</li><li><code>SqlCompatibleWindowsAuth</code> : Параметр із логічним значенням (true або false), що визначає, чи створювати параметри сумісного із SQL Server рядка підключення для автентифікації Windows. Стандартне значення&#160;– true.</li></ul>


## Examples

### Example #1 
Повернення результату простого запиту щодо вказаного рядка підключення.
```powerquery
Odbc.Query("dsn=your_dsn", "select * from Customers")
```

Result: 
```powerquery
table
```




## Category
Accessing data
