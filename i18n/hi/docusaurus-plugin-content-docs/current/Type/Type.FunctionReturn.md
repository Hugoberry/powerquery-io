---
title: Type.FunctionReturn
---

# Type.FunctionReturn


## Description

फ़ंक्‍शन प्रकार द्वारा लौटाया गया प्रकार लौटाता है.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Details

फ़ंक्‍शन <code>type</code> द्वारा लौटाया गया प्रकार लौटाता है.


## Examples

### Example #1 
&lt;code&gt;() as any)&lt;/code&gt; का वापसी प्रकार ढूँढें.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
