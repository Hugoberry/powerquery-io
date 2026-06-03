---
title: Duration.ToText
---

# Duration.ToText


Returns the text of the form "d.h:m:s".


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Returns a textual representation in the form "day.hour:mins:sec" of the given duration value, `duration`.

-   `duration`: A `duration` from which the textual representation is calculated.
-   `format`: *(Optional)* Deprecated, will raise an error if not null.


## Examples

### Example #1
Convert `#duration(2, 5, 55, 20)` into a text value.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
