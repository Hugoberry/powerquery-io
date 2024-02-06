---
title: DateTime.Date
---

# DateTime.Date


किसी दी गई दिनांक, दिनांक समय, दिनांक समय क्षेत्र मान के दिनांक घटक को लौटाता है.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

<code>dateTime</code>, दिए गए <code>date</code>, <code>datetime</code> या <code>datetimezone</code> मान का दिनांक घटक लौटाता है.


## Examples

### Example #1 
#datetime(2010, 12, 31, 11, 56, 02) का दिनांक मान प्राप्त करें.
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
