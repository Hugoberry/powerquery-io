---
title: Value.Type
---

# Value.Type


Returns the type of the given value.


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

Returns the type of the given value.

-   `value`: The value whose type is returned.


## Examples

### Example #1
Return the type of the specified number.
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
Return the type of the specified date.
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
Return the type of the specified record.
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
