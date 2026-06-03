---
title: Type.FunctionReturn
---

# Type.FunctionReturn


फ़ंक्‍शन प्रकार द्वारा लौटाया गया प्रकार लौटाता है.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

फ़ंक्‍शन `type` द्वारा लौटाया गया प्रकार लौटाता है.


## Examples

### Example #1
`() as any)` का वापसी प्रकार ढूँढें.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
