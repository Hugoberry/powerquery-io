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

वह <code>तार्किक</code> लौटाता है जो यह संकेत करता है कि रिकॉर्ड <code>type</code> खुला है या नहीं.


## Examples

### Example #1 
निर्धारित करें कि &lt;code&gt;type [ A = number, ...]&lt;/code&gt; रिकॉर्ड खुला है या नहीं.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
