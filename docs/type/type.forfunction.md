---
title: Type.ForFunction
---

# Type.ForFunction


Returns a type that represents functions with specific parameter and return type constraints.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Remarks

Creates a <code>function type</code> from <code>signature</code>, a record of <code>ReturnType</code> and <code>Parameters</code>, and <code>min</code>, the minimum number of arguments required to invoke the function.


## Examples

### Example #1 
Creates the type for a function that takes a number parameter named X and returns a number.
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
