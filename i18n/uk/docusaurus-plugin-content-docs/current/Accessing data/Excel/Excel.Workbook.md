---
title: Excel.Workbook
---

# Excel.Workbook


## Description

Повертає вміст книги Excel.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Details

Повертає вміст книги Excel.    <ul>     <li> <code>useHeaders</code> може мати Null-, логічне значення (true/false), що вказує, чи слід враховувати перший рядок кожної поверненої таблиці як заголовок, або запис параметрів. Значення за замовчуванням: false.</li>     <li> <code>delayTypes</code> може мати Null-, логічне значення (true/false), яке вказує, чи слід залишати нетипізованими стовпці кожної поверненої таблиці. Значення за замовчуванням: false.</li>    </ul>    Якщо для <code>useHeaders</code> указано запис, а <code>delayTypes</code> має Null-значення, можна використовувати такі поля запису:    <ul>     <li> <code>UseHeaders</code> – може мати Null- або логічне значення (true/false), що вказує, чи враховувати перший рядок кожної поверненої таблиці як заголовок. Значення за замовчуванням: false.</li>     <li> <code>DelayTypes</code> – може мати Null- або логічне значення (true/false), яке вказує, чи слід залишати нетипізованими стовпці кожної поверненої таблиці. Значення за замовчуванням: false.</li>     <li> <code>InferSheetDimensions</code> – може мати Null- або логічне значення (true/false), яке вказує, що потрібно зчитати, щоб викликати область аркуша, де містяться дані: саму книгу чи метадані вимірів із файлу. Цей параметр особливо корисний, якщо метадані атрибутів неправильні. Зверніть увагу, що він підтримується лише для файлів Excel Open XML, але не для застарілих. Значення за замовчуванням: false.</li>    </ul>    


## Examples

### Example #1 
Повернення вмісту з книги Excel, Аркуш1.
```powerquery
Excel.Workbook(File.Contents("C:\Book1.xlsx"), null, true){[Item="Sheet1"]}[Data]
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "ID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 3, Column2 = "Pam", Column3 = "543-7890"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Accessing data
