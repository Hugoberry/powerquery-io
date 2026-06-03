---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


यह बताता है कि रिकॉर्ड प्रकार खुला है या नहीं.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

वह `तार्किक` लौटाता है जो यह संकेत करता है कि रिकॉर्ड `type` खुला है या नहीं.


## Examples

### Example #1
निर्धारित करें कि `type [ A = number, ...]` रिकॉर्ड खुला है या नहीं.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
