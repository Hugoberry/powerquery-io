---
title: Time.ToRecord
---

# Time.ToRecord


Returns a record containing the Time value's parts.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Returns a record containing the parts of the given Time value, `time`.

-   `time`: A `time` value for from which the record of its parts is to be calculated.


## Examples

### Example #1
Convert the `#time(11, 56, 2)` value into a record containing Time values.
```powerquery
Time.ToRecord(#time(11, 56, 2))
```

Result: 
```powerquery
[
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
Time
