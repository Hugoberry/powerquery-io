---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


Returns a number indicating the minimum number of parameters required to invoke the type of function.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Remarks

Returns a number indicating the minimum number of parameters required to invoke the input <code>type</code> of function.


## Examples

### Example #1 
Find the number of required parameters to the function &lt;code&gt;(x as number, optional y as text)&lt;/code&gt;.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
