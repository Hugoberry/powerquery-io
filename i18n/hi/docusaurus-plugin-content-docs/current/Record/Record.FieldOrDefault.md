---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


किसी रिकॉर्ड में निर्दिष्ट फ़ील्ड का मान या फ़ील्ड न मिलने पर डिफ़ॉल्ट मान लौटाता है.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Remarks

रिकॉर्ड <code>record</code> में निर्दिष्ट फ़ील्ड <code>field</code> का मान लौटाता है. अगर फ़ील्ड नहीं मिलती, तो वैकल्पिक <code>defaultValue</code> को लौटाया जाता है.


## Examples

### Example #1 
रिकॉर्ड फ़ील्ड &#34;फ़ोन&#34; का मान ढूँढें या यदि वह मौजूद नहीं है तो नल लौटाएँ.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2 
रिकॉर्ड में &#34;फ़ोन&#34; का मान ढूँढें या यदि वह मौजूद नहीं है तो डिफ़ॉल्ट लौटाएँ.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
