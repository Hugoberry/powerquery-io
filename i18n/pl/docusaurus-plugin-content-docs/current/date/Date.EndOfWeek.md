---
title: Date.EndOfWeek
---

# Date.EndOfWeek


Zwraca koniec tygodnia.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Zwraca koniec tygodnia, który zawiera <code>dateTime</code>.    Ta funkcja przyjmuje opcjonalną wartość <code>Day</code>, aby ustawić pierwszy dzień tygodnia dla swoich względnych obliczeń. Wartość domyślna to <code>Day.Sunday</code>.      <ul>        <li><code>dateTime</code>: wartość typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code>, na podstawie której jest obliczany ostatni dzień tygodnia.</li>        <li><code>firstDayOfWeek</code>: <i>[Optional]</i> wartość typu <code>Day.Type</code> reprezentująca pierwszy dzień tygodnia. Możliwe wartości to <code>Day.Sunday</code>, <code>Day.Monday</code>, <code>Day.Tuesday</code>, <code>Day.Wednesday</code>, <code>Day.Thursday</code>, <code>Day.Friday</code> i <code>Day.Saturday.</code>. Wartość domyślna to <code>Day.Sunday</code>.</li>      </ul>


## Examples

### Example #1 
Określ koniec tygodnia dla daty 2011-05-14.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2 
Ustal koniec tygodnia dla daty 2011-05-17 17:00:00 -7:00, używając jako pierwszego dnia tygodnia niedzieli (ustawienie domyślne).
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
