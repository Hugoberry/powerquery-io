---
title: Value.As
---

# Value.As


Returns the value if it's compatible with the specified type.


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Remarks

Returns the value if it's compatible with the specified type. This is equivalent to the "as" operator in M, with the exception that it can accept identifier type references such as Number.Type.


## Examples

### Example #1
Μεταδώστε έναν αριθμό σε έναν αριθμό.
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2
Προσπαθήστε να μεταδώσετε μια τιμή κειμένου σε έναν αριθμό.
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
