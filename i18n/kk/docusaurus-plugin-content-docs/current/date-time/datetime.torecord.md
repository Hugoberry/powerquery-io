---
title: DateTime.ToRecord
---

# DateTime.ToRecord


Күн және уақыт мәнінің бөліктерін қамтитын жазбаны қайтарады.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Remarks

Берілген күн және уақыт мәнінің, `dateTime`, бөліктерін қамтитын жазбаны қайтарады.

-   `dateTime`: бөліктерінің жазбасы есептелетін `datetime` мәні.


## Examples

### Example #1
`#datetime(2011, 12, 31, 11, 56, 2)` мәнін күн және уақыт мәндерін қамтитын жазбаға түрлендіру.
```powerquery
DateTime.ToRecord(#datetime(2011, 12, 31, 11, 56, 2))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
DateTime
