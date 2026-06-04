---
title: Duration.ToRecord
---

# Duration.ToRecord


Ұзақтықтың бөліктерін қамтитын жазбаны қайтарады.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

`duration` ұзақтық мәнінің бөліктерін қамтитын жазбаны қайтарады.

-   `duration`: жазба жасалған `duration`.


## Examples

### Example #1
`#duration(2, 5, 55, 20)` мәнін тиісті болса, күндерді, сағаттарды, минуттарды және секундтарды қамтитын бөліктерінің жазбасына түрлендіру.
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
