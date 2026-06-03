---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


Konverterar timezone-komponenten till den lokala tidszonen.


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

Ändrar tidszonsinformationen för datetimezone-värdet `dateTimeZone` till den lokala tidszonen. Om `dateTimeZone` inte har någon timezone-komponent läggs informationen om den lokala tidszonen till.


## Examples

### Example #1
Ändra tidszonsinformationen för #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) till den lokala tidszonen (PST förutsätts).
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
