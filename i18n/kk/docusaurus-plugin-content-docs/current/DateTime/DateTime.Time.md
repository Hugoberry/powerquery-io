---
title: DateTime.Time
---

# DateTime.Time


## Description

Осы күн/уақыт мәнінің уақыт бөлігін қайтарады.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Details

Осы күн/уақыт мәнінің, <code>dateTime</code>, уақыт бөлігін қайтарады.


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
