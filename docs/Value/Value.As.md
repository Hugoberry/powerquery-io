---
title: Value.As
---

# Value.As


Returns the value if it is compatible with the specified type.


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Remarks

Returns the value if it is compatible with the specified type. This is equivalent to the "as" operator in M, with the exception that it can accept identifier type references such as Number.Type.


## Examples

### Example #1 
Cast a number to a number.
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
Attempt to cast a text value to a number.
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
