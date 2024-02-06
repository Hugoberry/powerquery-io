---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


Ändrar tidszonen för värdet.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

Ändrar tidszonsinformationen för datetimezone-värdet <code>dateTimeZone</code> till den nya tidszonsinformationen från <code>timezoneHours</code> och <code>timezoneMinutes</code> (valfri).    Om <code>dateTimeZone</code> inte har någon timezone-komponent genereras ett undantag.


## Examples

### Example #1 
Ändra tidszonsinformationen för #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) till 8 timmar.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2 
Ändra tidszonsinformationen för #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) till -30 minuter.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
