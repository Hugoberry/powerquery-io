---
title: Time.ToRecord
---

# Time.ToRecord


Уақыт мәнінің бөліктерін қамтитын жазбаны қайтарады.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Осы уақыт мәнінің, `time`, бөліктерін қамтитын жазбаны қайтарады.

-   `time`: бөліктерінің жазбасы есептелетін `time` мәні.


## Examples

### Example #1
`#time(11, 56, 2)` мәнін уақыт мәндерін қамтитын жазбаға түрлендіру.
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
