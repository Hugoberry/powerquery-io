---
title: Value.RemoveMetadata
---

# Value.RemoveMetadata


Καταργεί τα μετα-δεδομένα της εισόδου.


## Syntax

```powerquery
Value.RemoveMetadata(
    value as any,
    optional metaValue as any
) as any
```


## Remarks

Καταργεί τα μετα-δεδομένα της εισόδου.


## Examples

### Example #1
Κατάργηση όλων των μετα-δεδομένων από μια τιμή κειμένου.
```powerquery
Value.Metadata(
    Value.RemoveMetadata("abc" meta [a = 1, b = 2])
)
```

Result: 
```powerquery
[]
```


### Example #2
Κατάργηση μόνο ενός πεδίου μετα-δεδομένων από μια τιμή κειμένου.
```powerquery
Value.Metadata(
    Value.RemoveMetadata("abc" meta [a = 1, b = 2], {"a"})
)
```

Result: 
```powerquery
[b = 2]
```




## Category
Metadata
