---
title: Record.FromTable
---

# Record.FromTable


Створює запис із таблиці виду \{\[Name = name, Value = value\]\}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Повертає запис із таблиці записів `table`, що містить імена полів та імена значень `{[Name = name, Value = value]}`. Якщо імена полів не унікальні, стається помилка.


## Examples

### Example #1
Створити з таблиці запис такого вигляду: Table.FromRecords(\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\}).
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
