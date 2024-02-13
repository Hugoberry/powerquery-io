---
title: Type.FunctionParameters
---

# Type.FunctionParameters


Returns a record with field values set to the name of the parameters of a function type, and their values set to their corresponding types.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Remarks

Returns a record with field values set to the name of the parameters of <code>type</code>, and their values set to their corresponding types.


## Examples

### Example #1 
Find the types of the parameters to the function &lt;code&gt;(x as number, y as text)&lt;/code&gt;.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
