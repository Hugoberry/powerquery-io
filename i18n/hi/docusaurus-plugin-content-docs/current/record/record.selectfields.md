---
title: Record.SelectFields
---

# Record.SelectFields


ऐसा रिकॉर्ड लौटाता है जिसमें केवल निर्दिष्ट फ़ील्ड होती हैं.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

एक ऐसा रिकॉर्ड लौटाता है जिसमें इनपुट `record` से `fields` में निर्दिष्ट फ़ील्ड ही शामिल होते है.


## Examples

### Example #1
रिकॉर्ड में फ़ील्ड "आइटम" और "मूल्य" चुनें.
```powerquery
Record.SelectFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0],
    {"Item", "Price"}
)
```

Result: 
```powerquery
[Item = "Fishing rod", Price = 100]
```




## Category
Record.Selection
