---
title: Table.PrefixColumns
---

# Table.PrefixColumns


## Description

Повертає таблицю, на початок кожного стовпця якої додано заданий текст.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Details

Повертає таблицю, де до всіх назв стовпців, отриманих із таблиці <code>table</code>, на початку додаються вказаний текст (<code>prefix</code>) і крапка: <code>prefix</code><code>.ColumnName</code>.


## Examples

### Example #1 
Додати на початку стовпців таблиці текст &#34;MyTable&#34;.
```powerquery
Table.PrefixColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "MyTable"
)
```

Result: 
```powerquery
Table.FromRecords({[MyTable.CustomerID = 1, MyTable.Name = "Bob", MyTable.Phone = "123-4567"]})
```




## Category
Table.Column operations
