---
title: Record.RenameFields
---

# Record.RenameFields


## Description

सूची के नाम(नामों) को \{ old, new } के रूप में बदलता है.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Details

इनपुट <code>record</code> की फ़ील्ड का नाम सूची <code>renames</code> में निर्दिष्ट फ़ील्ड नामों में बदलने के बाद एक रिकॉर्ड लौटाता है. एकाधिक नाम बदलने के लिए, एक नेस्टेड सूची का उपयोग किया जा सकता है (\{ \{old1, new1}, \{old2, new2} }.


## Examples

### Example #1 
रिकॉर्ड से फ़ील्ड &#34;UnitPrice&#34; का नाम &#34;मूल्य&#34; में बदलें.
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
रिकॉर्ड से फ़ील्ड &#34;UnitPrice&#34; का नाम &#34;मूल्य&#34; में और &#34;OrderNum&#34; का नाम &#34;OrderID&#34; में बदलें.
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
