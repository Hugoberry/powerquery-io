---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


Konverterar timezone-komponenten till UTC-tidszonen.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

Ändrar tidszonsinformationen för datetime-värdet <code>dateTimeZone</code> till UTC-tidszonen.    Om <code>dateTimeZone</code> inte har någon timezone-komponent läggs informationen om UTC-tidszonen till.


## Examples

### Example #1 
Ändra tidszonsinformationen för #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) till UTC-tidszonen.
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
