---
title: Record.RenameFields
---

# Record.RenameFields


सूची के नाम(नामों) को \{ old, new \} के रूप में बदलता है.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

सूची `renames` में निर्दिष्ट नए फ़ील्ड नामों में इनपुट `record` में फ़ील्ड का नाम बदलने के बाद एक रिकॉर्ड लौटाता है. एकाधिक नाम बदलने के लिए, एक नेस्टेड सूची का उपयोग किया जा सकता है (\{ \{old1, new1\}, \{old2, new2\} \}).


## Examples

### Example #1
रिकॉर्ड से फ़ील्ड "UnitPrice" का नाम "मूल्य" में बदलें.
```powerquery
Record.RenameFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {"UnitPrice", "Price"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```


### Example #2
रिकॉर्ड से फ़ील्ड "UnitPrice" का नाम "मूल्य" में और "OrderNum" का नाम "OrderID" में बदलें.
```powerquery
Record.RenameFields(
    [OrderNum = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {
        {"UnitPrice", "Price"},
        {"OrderNum", "OrderID"}
    }
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
