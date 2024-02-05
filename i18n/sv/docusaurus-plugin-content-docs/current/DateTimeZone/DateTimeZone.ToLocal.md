---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


## Description

Konverterar timezone-komponenten till den lokala tidszonen.


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

Ändrar tidszonsinformationen för datetimezone-värdet <code>dateTimeZone</code> till den lokala tidszonen.    Om <code>dateTimeZone</code> inte har någon timezone-komponent läggs informationen om den lokala tidszonen till.


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
