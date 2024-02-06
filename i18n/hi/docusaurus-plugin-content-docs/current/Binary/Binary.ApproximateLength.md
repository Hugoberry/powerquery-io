---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


बाइनरी की अनुमानित लंबाई लौटाता है.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Remarks

<code>binary</code> की अनुमानित लंबाई लौटाता है, या यदि डेटा स्रोत अनुमानित लंबाई का समर्थन नहीं करता है, तो कोई त्रुटि लौटाता है.


## Examples

### Example #1 
बाइनरी मान की अनुमानित लंबाई पाएँ.
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
