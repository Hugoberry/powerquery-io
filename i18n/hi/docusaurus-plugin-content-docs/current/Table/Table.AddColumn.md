---
title: Table.AddColumn
---

# Table.AddColumn


निर्दिष्ट नाम का स्तंभ जोड़ता है. इनपुट के रूप में ली गई प्रत्येक पंक्ति के साथ निर्दिष्ट चयन फ़ंक्शन का उपयोग करके मान को संगणित किया जाता है.


## Syntax

```powerquery
Table.AddColumn(
    table as table,
    newColumnName as text,
    columnGenerator as function,
    optional columnType as type
) as table
```


## Remarks

तालिका <code>table</code> में <code>newColumnName</code> नाम का स्तंभ जोड़ता है. इनपुट के रूप ली गई प्रत्येक पंक्ति के साथ निर्दिष्ट चयन फ़ंक्शन <code>columnGenerator</code> का उपयोग करके स्तंभ के लिए मान को संगणित किया जाता है.


## Examples

### Example #1 
तालिका में &#34;TotalPrice&#34; नाम का एक संख्या स्तंभ जोड़ें, जिसका हर मान [Price] और [Shipping] स्तंभों का योग हो.
```powerquery
Table.AddColumn(
    Table.FromRecords({
        [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0, Shipping = 10.00],
        [OrderID = 2, CustomerID = 1, Item = "1 lb. worms", Price = 5.0, Shipping = 15.00],
        [OrderID = 3, CustomerID = 2, Item = "Fishing net", Price = 25.0, Shipping = 10.00]
    }),
    "TotalPrice",
    each [Price] + [Shipping],
    type number
)
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100, Shipping = 10, TotalPrice = 110],
    [OrderID = 2, CustomerID = 1, Item = "1 lb. worms", Price = 5, Shipping = 15, TotalPrice = 20],
    [OrderID = 3, CustomerID = 2, Item = "Fishing net", Price = 25, Shipping = 10, TotalPrice = 35]
})
```




## Category
Table.Transformation
