---
title: Logical.From
---

# Logical.From


Creates a logical from the given value.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Returns a `logical` value from the given `value`. If the given `value` is `null`, `Logical.From` returns `null`. If the given `value` is `logical`, `value` is returned. Values of the following types can be converted to a `logical` value:

-   `text`: A `logical` value from the text value, either `"true"` or `"false"`. Refer to `Logical.FromText` for details.
-   `number`: `false` if `value` equals `0`, `true` otherwise.

If `value` is of any other type, an error is returned.


## Examples

### Example #1
Convert `2` to a `logical` value.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
