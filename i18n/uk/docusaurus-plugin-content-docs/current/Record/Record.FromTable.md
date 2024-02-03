---
title: Record.FromTable
---

# Record.FromTable


## Description

Створює запис із таблиці виду \{[Name = name, Value = value]}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Details

Повертає запис із таблиці записів <code>table</code>, що містить імена полів та імена значень <code>\{[Name = name, Value = value]}</code>. Якщо поля не унікальні, повертається виняткова ситуація.


## Examples

### Example #1 
Створити з таблиці запис такого вигляду: Table.FromRecords(\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]}).
```powerquery
Record.FromTable(
    Table.FromRecords({
        [Name = "CustomerID", Value = 1],
        [Name = "Name", Value = "Bob"],
        [Name = "Phone", Value = "123-4567"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
