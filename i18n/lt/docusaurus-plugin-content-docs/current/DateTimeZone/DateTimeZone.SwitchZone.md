---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


## Description

Pakeičiama reikšmės laiko juosta.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

Laiko juostos informacija datos ir laiko juostos reikšmėje <code>dateTimeZone</code> pakeičiama į naują laiko juostos informaciją, pateiktą <code>timezoneHours</code> ir pasirinktinai <code>timezoneMinutes</code>.    Jei <code>dateTimeZone</code> nėra laiko juostos komponento, pateikiama išimtis.


## Examples

### Example #1 
Pakeiskite #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) laiko juostos informaciją į 8 valandas.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2 
Pakeiskite #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) laiko juostos informaciją į -30 min.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
