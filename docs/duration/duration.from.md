---
title: Duration.From
---

# Duration.From


Creates a duration from the given value.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

Returns a duration value from the given value.

-   `value`: The value from which the duration is derived. If the given `value` is `null`, this function returns `null`. If the given `value` is a `duration`, `value` is returned. Values of the following types can be converted to a `duration` value:
    -   `text`: A `duration` value from textual elapsed time forms (d.h:m:s). Refer to `Duration.FromText` for details.
    -   `number`: A `duration` equivalent to the number of whole and fractional days expressed by `value`.

If `value` is of any other type, an error is returned.


## Examples

### Example #1
Convert `2.525` into a `duration` value.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```


### Example #2
Convert the text value `"2.05:55:20.34567"` into a `duration` value.
```powerquery
Duration.From("2.05:55:20.34567")
```

Result: 
```powerquery
#duration(2, 5, 55, 20.3456700)
```




## Category
Duration
