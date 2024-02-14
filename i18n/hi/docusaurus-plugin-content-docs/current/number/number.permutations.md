---
title: Number.Permutations
---

# Number.Permutations


संख्या का क्रम संचय लौटाता है.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Remarks

आइटमों की संख्या, <code>setSize</code>, से निर्दिष्ट क्रम संचय आकार, <code>permutationSize</code> के साथ जनरेट किए जा सकने वाले क्रम संचयों की संख्या लौटाता है.


## Examples

### Example #1 
कुल 5 आइटमों के 3 समूहों से क्रम संचयों की संख्या प्राप्त करें.
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
