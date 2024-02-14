---
title: Record.Field
---

# Record.Field


किसी रिकॉर्ड में निर्दिष्ट फ़ील्ड का मान लौटाता है.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

<code>record</code> में निर्दिष्ट <code>field</code> का मान लौटाता है. अगर फ़ील्ड नहीं मिलता, तो एक अपवाद दिखाया जाता है.


## Examples

### Example #1 
रिकॉर्ड में फ़ील्ड &#34;CustomerID&#34; का मान ढूँढें.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
