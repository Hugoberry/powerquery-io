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

एक ऐसा रिकॉर्ड लौटाता है जिसमें इनपुट <code>record</code> से <code>fields</code> में निर्दिष्ट फ़ील्ड ही शामिल होते है.


## Examples

### Example #1 
रिकॉर्ड में फ़ील्ड &#34;आइटम&#34; और &#34;मूल्य&#34; चुनें.
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
