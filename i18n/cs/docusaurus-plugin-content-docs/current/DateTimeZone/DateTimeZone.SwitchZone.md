---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


## Description

Změní časové pásmo hodnoty.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

Změní údaj o časovém pásmu v hodnotě datetimezone <code>dateTimeZone</code> na nový údaj o časovém pásmu vrácený z <code>timezoneHours</code> a volitelně <code>timezoneMinutes</code>.    Pokud <code>dateTimeZone</code> neobsahuje komponentu časového pásma, je vrácena výjimka.


## Examples

### Example #1 
Změnit údaj o časovém pásmu pro hodnotu #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) na 8 hodin
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2 
Změnit informace o časovém pásmu pro hodnotu #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) na -30 minut.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
