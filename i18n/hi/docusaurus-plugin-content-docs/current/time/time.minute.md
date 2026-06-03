---
title: Time.Minute
---

# Time.Minute


मिनट घटक लौटाता है.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Remarks

प्रदान किए गए `time`, `datetime`, या `datetimezone` मान का मिनट घटक लौटाता है, `dateTime`.


## Examples

### Example #1
मिनट को #datetime(2011, 12, 31, 9, 15, 36) में ढूँढें.
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
