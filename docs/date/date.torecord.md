---
title: Date.ToRecord
---

# Date.ToRecord


Returns a record containing parts of the date value.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

Returns a record containing the parts of the given date value, `date`.

-   `date`: A `date` value for from which the record of its parts is to be calculated.


## Examples

### Example #1
Convert the `#date(2011, 12, 31)` value into a record containing parts from the date value.
```powerquery
Date.ToRecord(#date(2011, 12, 31))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31
]
```




## Category
Date
