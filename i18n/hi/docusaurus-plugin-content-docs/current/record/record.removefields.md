---
title: Record.RemoveFields
---

# Record.RemoveFields


किसी रिकॉर्ड में निर्दिष्ट फ़ील्ड का मान लौटाता है.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

एक ऐसा रिकॉर्ड लौटाता है जो इनपुट `record` से सूची `fields` में निर्दिष्ट सभी फ़ील्ड निकाल देता है. अगर निर्दिष्ट फ़ील्ड मौजूद नहीं है, तो एक त्रुटि आएगी.


## Examples

### Example #1
रिकॉर्ड से फ़ील्ड "मूल्य" निकालें.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2
रिकॉर्ड से फ़ील्ड "मूल्य" और "आइटम" निकालें.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
