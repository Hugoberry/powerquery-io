---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


Осы күн және уақыт белдеуі мәніне уақыт белдеуі туралы ақпаратты жояды.


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Remarks

уақыт белдеуі ақпараты жойылған `dateTimeZone` #datetime мәнін береді.


## Examples

### Example #1
#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0) мәнінен уақыт белдеуі туралы ақпаратты жою.
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
