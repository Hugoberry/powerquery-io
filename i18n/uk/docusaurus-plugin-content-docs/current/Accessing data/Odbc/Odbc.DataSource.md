---
title: Odbc.DataSource
---

# Odbc.DataSource


## Description

Повертає таблицю з поданнями й таблицями SQL із джерела даних ODBC. 


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

Повертає таблицю з таблицями SQL і поданнями з джерела даних ODBC, визначеного рядком підключення "<code>connectionString</code>". "<code>connectionString</code>" може бути текстом або записом пар значень властивостей. Значення властивостей можуть мати текстовий або числовий формат. Можна вказати додатковий параметр запису (<code>options</code>), щоб задати додаткові властивості. Запис може містити такі поля:    <ul><li><code>CreateNavigationProperties</code> : Параметр із логічним значенням (true або false), що визначає, чи потрібно генерувати властивості навігації для значень, що повертаються (стандартне значення&#160;– true).</li><li><code>HierarchicalNavigation</code> : Параметр із логічним значенням (true або false), що визначає, чи потрібно під час перегляду групувати таблиці за іменами схем (стандартне значення&#160;– false).</li><li><code>ConnectionTimeout</code> : Дає змогу контролювати тривалість очікування для спроби встановити підключення до сервера, після досягнення якої спроба переривається. Стандартне значення – 15 секунд.</li><li><code>CommandTimeout</code> : Дає змогу контролювати тривалість виконання запиту на сервері, після досягнення якої він скасовується. Стандартне значення – 10 хвилин.</li><li><code>SqlCompatibleWindowsAuth</code> : Параметр із логічним значенням (true або false), що визначає, чи створювати параметри сумісного із SQL Server рядка підключення для автентифікації Windows. Стандартне значення&#160;– true.</li></ul>


## Examples

### Example #1 
Повернення таблиць і подань SQL за вказаним рядком підключення.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
