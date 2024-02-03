---
title: Type.IsNullable
---

# Type.IsNullable


## Description

यदि प्रकार निरर्थक प्रकार हो, तो सही लौटाता है; अन्‍यथा, गलत लौटाता है.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Details

यदि प्रकार <code>निरर्थक</code> प्रकार हो, तो <code>सही</code> लौटाता है; अन्‍यथा, <code>गलत</code> लौटाता है.


## Examples

### Example #1 
निर्धारित करें कि &lt;code&gt;संख्‍या&lt;/code&gt; निरर्थक है या नहीं.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
निर्धारित करें कि &lt;code&gt;type nullable number&lt;/code&gt; निरर्थक है या नहीं.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
