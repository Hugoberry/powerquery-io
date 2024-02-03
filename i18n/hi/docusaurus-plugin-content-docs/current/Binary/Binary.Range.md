---
title: Binary.Range
---

# Binary.Range


## Description

ऑफ़सेट पर शुरू होने वाले बाइनरी मान का सबसेट लौटाता है.


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Details

ऑफ़सेट <code>binary</code> पर शुरू होने वाली सूची का सबसेट लौटाता है. एक वैकल्पिक पैरामीटर, <code>offset</code>, सबसेट के आइटमों की अधिकतम संख्या सेट करता है.


## Examples

### Example #1 
ऑफ़सेट 6 से प्रारंभ होने वाले बाइनरी मान का सबसेट लौटाता है.
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2 
बाइनरी मान की ऑफ़सेट 6 से लंबाई 2 का सबसेट लौटाता है.
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
