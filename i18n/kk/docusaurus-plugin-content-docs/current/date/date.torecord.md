---
title: Date.ToRecord
---

# Date.ToRecord


Күн мәнінің бөліктерін қамтитын жазбаны қайтарады.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

Берілген күн мәнінің, `date`, бөліктерін қамтитын жазбаны қайтарады.

-   `date`: бөліктерінің жазбасы есептелетін `date` мәні


## Examples

### Example #1
`#date(2011, 12, 31)` мәнін күн мәнінің бөліктерін қамтитын жазбаға түрлендіру.
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
