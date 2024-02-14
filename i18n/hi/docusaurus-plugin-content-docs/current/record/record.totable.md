---
title: Record.ToTable
---

# Record.ToTable


ऐसी तालिका लौटाता है जिसमें प्रत्येक पंक्ति एक फ़ील्ड नाम और इनपुट रिकॉर्ड का मान होती है.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Remarks

<code>record</code> की प्रत्येक फ़ील्ड के लिए एक पंक्ति के साथ <code>Name</code> और <code>Value</code> स्तंभों वाली एक तालिका लौटाता है.


## Examples

### Example #1 
रिकॉर्ड से तालिका लौटाएँ.
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
