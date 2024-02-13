---
title: Binary.Buffer
---

# Binary.Buffer


स्मृति में बाइनरी मान को बफ़र करता है.


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Remarks

स्मृति में बाइनरी मान को बफ़र करता है.  इस कॉल का परिणाम एक स्थायी बाइनरी मान है, जिसका अर्थ है इसमें निर्धारणात्मक लंबाई और बाइट्स का क्रम होगा.


## Examples

### Example #1 
बाइनरी मान का एक स्थायी संस्करण बनाएँ.
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
