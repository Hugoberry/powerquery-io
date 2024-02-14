---
title: Record.ToTable
---

# Record.ToTable


Her satırın alan adı ve girdi kaydının değerini içerdiği bir tablo döndürür.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Remarks

<code>record</code> içindeki her alan için birer satır içerecek şekilde <code>Name</code> ve <code>Value</code> sütunlarını içeren bir tablo döndürür.


## Examples

### Example #1 
Kayıttaki tabloyu döndürür.
```powerquery
Record.ToTable([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "OrderID", Value = 1],
    [Name = "CustomerID", Value = 1],
    [Name = "Item", Value = "Fishing rod"],
    [Name = "Price", Value = 100]
})
```




## Category
Record.Serialization
