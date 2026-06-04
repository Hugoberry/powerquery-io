---
title: DateTime.Time
---

# DateTime.Time


Осы күн/уақыт мәнінің уақыт бөлігін қайтарады.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Remarks

Осы күн/уақыт мәнінің, `dateTime`, уақыт бөлігін қайтарады.


## Examples

### Example #1
#datetime(2010, 12, 31, 11, 56, 02) уақыт мәнін табу.
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
