---
title: Table.FindText
---

# Table.FindText


## Description

Повертає всі рядки, що містять даний текст у таблиці.


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Details

Повертає всі рядки в таблиці <code>table</code>, що містять текст <code>text</code>. Якщо текст не знайдено, повертається пуста таблиця.


## Examples

### Example #1 
Знайти в таблиці рядки, що містять значення &#34;Bob&#34;.
```powerquery
Table.FindText(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Bob"
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
