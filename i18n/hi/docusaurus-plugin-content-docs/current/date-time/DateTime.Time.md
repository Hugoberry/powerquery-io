---
title: DateTime.Time
---

# DateTime.Time


दिए गए datetime मान का समय भाग लौटाता है.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Remarks

दिए गए datetime मान, <code>dateTime</code> का समय भाग लौटाता है.


## Examples

### Example #1 
#datetime(2010, 12, 31, 11, 56, 02) का समय मान प्राप्त करें.
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
