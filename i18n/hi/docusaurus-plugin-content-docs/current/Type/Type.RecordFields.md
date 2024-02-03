---
title: Type.RecordFields
---

# Type.RecordFields


## Description

वह रिकॉर्ड लौटाता है जो संबंधित नाम और मान वाले लौटाए गए रिकॉर्ड प्रकार के प्रत्‍येक फ़ील्‍ड के साथ रिकॉर्ड प्रकार के फ़ील्‍ड का वर्णन करता है.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Details

वह रिकॉर्ड लौटाता है जो <code>type</code> रिकॉर्ड के फ़ील्‍ड का वर्णन करता है. लौटाए गए रिकॉर्ड प्रकार के प्रत्‍येक फ़ील्‍ड में रिकॉर्ड <code>[ Type = type, Optional = logical ]</code> के फ़ॉर्म में संबंधित नाम और मान होता है.


## Examples

### Example #1 
रिकॉर्ड &lt;code&gt;[ A = number, optional B = any]&lt;/code&gt; का नाम और मान ढूँढें.
```powerquery
Type.RecordFields(type [A = number, optional B = any])
```

Result: 
```powerquery
[
    A = [Type = type number, Optional = false],
    B = [Type = type any, Optional = true]
]
```




## Category
Type
