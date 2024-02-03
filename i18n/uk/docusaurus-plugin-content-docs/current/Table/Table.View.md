---
title: Table.View
---

# Table.View


## Description

Створює або розширює таблицю з користувацькими обробниками для операцій запитів і дій.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Details

Повертає подання таблиці "<code>table</code>", де функції, визначені параметром <code>handlers</code>, використовуються замість поведінки за замовчуванням, коли до цього подання застосовують певну операцію.<br />Якщо <code>table</code> указано, усі функції обробника є необов’язковими. Якщо <code>table</code> не вказано, функції обробника <code>GetType</code> і <code>GetRows</code> необхідно вказати. Якщо для операції не вказано функцію обробника, до таблиці "<code>table</code>" натомість застосовується поведінка за замовчуванням для цієї операції (окрім випадків застосування функції <code>GetExpression</code>).<br />Функції обробника мають повертати значення, семантично еквівалентне результату виконання операції для таблиці "<code>table</code>" (або отримане подання, якщо використовується <code>GetExpression</code>).<br />Якщо функція обробника повертає помилку, до подання застосовується поведінка за замовчуванням для цієї операції.<br />Можна використати <code>Table.View</code>, щоб запровадити складання до джерела даних – перетворити запити M на запити для конкретних джерел (наприклад, створити інструкцію T-SQL для запитів M).<br />Перегляньте опубліковану документацію щодо настроюваного з’єднувача Power Query, щоб дізнатися більше про <code>Table.View</code>.<br />


## Examples

### Example #1 
Створіть просте подання, яке не потребує доступу до рядків для визначення типу або кількості рядків.
```powerquery
Table.View(
    null,
    [
        GetType = () => type table [CustomerID = number, Name = text, Phone = nullable text],
        GetRows = () => Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
        GetRowCount = () => 1
    ]
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Table construction
