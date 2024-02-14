---
title: Number.Log
---

# Number.Log


निर्दिष्ट आधार (डिफ़ॉल्ट e) की संख्या का लघुगणक लौटाता है.


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Remarks

निर्दिष्ट <code>base</code> आधार के लिए एक संख्या <code>number</code> का लघुगणक लौटाता है. यदि <code>base</code> निर्दिष्ट नहीं है, तो डिफ़ॉल्ट मान Number.E होता है.    यदि <code>number</code> नल है, तो <code>Number.Log</code> नल लौटाता है.


## Examples

### Example #1 
2 का आधार-10 लघुगणक प्राप्त करें.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2 
2 का आधार-e लघुगणक प्राप्त करें.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
