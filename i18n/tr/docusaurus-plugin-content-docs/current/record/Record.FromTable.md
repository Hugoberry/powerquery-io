---
title: Record.FromTable
---

# Record.FromTable


\{[Name = name, Value = value]} biçimindeki bir tablodan kayıt oluşturur.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

<code>table</code> kayıt tablosundan alan ve değer adlarını içeren bir kaydı döndürür <code>\{[Name = name, Value = value]}</code>. Alan adları benzersiz değilse, özel durum oluşur.


## Examples

### Example #1 
Table.FromRecords(\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]}) form tablosundan bir kayıt oluşturur.
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
