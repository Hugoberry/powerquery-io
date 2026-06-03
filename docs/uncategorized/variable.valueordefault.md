---
title: Variable.ValueOrDefault
---

# Variable.ValueOrDefault


Returns the value of the specified variable or the default value if the variable is not defined.


## Syntax

```powerquery
Variable.ValueOrDefault(
    identifier as text,
    optional defaultValue as any
) as any
```


## Remarks

Returns the value of the specified variable `identifier` defined by the current evaluation environment. If the variable is not defined, the optional `defaultValue` is returned.



## Category
Values.Implementation
