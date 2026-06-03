---
title: Type.IsNullable
---

# Type.IsNullable


यदि प्रकार निरर्थक प्रकार हो, तो सही लौटाता है; अन्‍यथा, गलत लौटाता है.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

यदि प्रकार `निरर्थक` प्रकार हो, तो `सही` लौटाता है; अन्‍यथा, `गलत` लौटाता है.


## Examples

### Example #1
निर्धारित करें कि `संख्‍या` निरर्थक है या नहीं.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
निर्धारित करें कि `type nullable number` निरर्थक है या नहीं.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
