---
title: Record.FromTable
---

# Record.FromTable


\{\[Name = name, Value = value\]\} biçimindeki bir tablodan kayıt oluşturur.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

`table` kayıt tablosundan alan ve değer adlarını içeren bir kaydı döndürür `{[Name = name, Value = value]}`. Alan adları benzersiz değilse bir hata oluşur.


## Examples

### Example #1
Table.FromRecords(\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\}) form tablosundan bir kayıt oluşturur.
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
