---
title: Duration.From
---

# Duration.From


Δημιουργεί μια διάρκεια από την τιμή που δόθηκε.


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
Μετατρέψτε την `2.525` σε μια τιμή `duration`.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```


### Example #2
Μετατρέψτε την τιμή κειμένου `"2.05:55:20.34567"` σε τιμή `διάρκεια`.
```powerquery
Duration.From("2.05:55:20.34567")
```

Result: 
```powerquery
#duration(2, 5, 55, 20.3456700)
```




## Category
Duration
