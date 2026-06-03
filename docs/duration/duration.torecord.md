---
title: Duration.ToRecord
---

# Duration.ToRecord


Returns a record containing the parts of the duration.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Returns a record containing the parts the duration value, `duration`.

-   `duration`: A `duration` from which the record is created.


## Examples

### Example #1
Convert `#duration(2, 5, 55, 20)` into a record of its parts including days, hours, minutes, and seconds if applicable.
```powerquery
Duration.ToRecord(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
[
    Days = 2,
    Hours = 5,
    Minutes = 55,
    Seconds = 20
]
```




## Category
Duration
