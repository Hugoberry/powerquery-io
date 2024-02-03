---
title: Record.ReorderFields
---

# Record.ReorderFields


## Description

नए क्रम में निर्दिष्ट फ़ील्ड रिकॉर्ड करता है.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Details

<code>record</code> की फ़ील्ड को सूची <code>fieldOrder</code> में निर्दिष्ट फ़ील्ड के क्रम में पुनः क्रमित करने के बाद एक रिकॉर्ड लौटाता है. फ़ील्ड मानों को बनाए रखा जाता है और <code>fieldOrder</code> में नहीं सूचीबद्ध फ़ील्ड को उनकी मूल स्थिति में छोड़ दिया जाता है.


## Examples

### Example #1 
रिकॉर्ड में कुछ फ़ील्ड पुनः क्रमित करें.
```powerquery
Record.ReorderFields(
    [CustomerID = 1, OrderID = 1, Item = "Fishing rod", Price = 100.0],
    {"OrderID", "CustomerID"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
