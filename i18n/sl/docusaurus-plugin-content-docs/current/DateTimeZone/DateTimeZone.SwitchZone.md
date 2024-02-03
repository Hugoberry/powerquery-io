---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


## Description

Spremeni časovni pas vrednosti.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

Spremeni podatke o časovnem pasu vrednosti "datetimezone" <code>dateTimeZone</code> na nove podatke o časovnem pasu, ki jih zagotovi <code>timezoneHours</code> in izbirno <code>timezoneMinutes</code>.    Če <code>dateTimeZone</code> nima komponente "timezone", pride do izjeme.


## Examples

### Example #1 
Spremenite podatke o časovnem pasu za &#34;#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30)&#34; na 8 ur.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2 
Spremenite podatke o časovnem pasu za &#34;#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30)&#34; na 30 minut.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
