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

Ändrar tidszonsinformationen för datetimezone-värdet `dateTimeZone` till den nya tidszonsinformationen från `timezoneHours` och valfritt `timezoneMinutes`. Om `dateTimeZone` inte har någon tidzon-komponent genereras ett fel.


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
