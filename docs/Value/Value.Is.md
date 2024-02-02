---
title: Value.Is
---

# Value.Is


## Description

Determines whether a value is compatible with the specified type.


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Details

Determines whether a value is compatible with the specified type. This is equivalent to the "is" operator in M, with the exception that it can accept identifier type references such as Number.Type.


## Examples

### Example #1 
Compare two ways of determining if a number is compatible with type number.
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
