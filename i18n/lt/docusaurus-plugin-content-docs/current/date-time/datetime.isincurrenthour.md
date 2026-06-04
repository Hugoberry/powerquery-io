---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


Nurodo, ar ši data ir laikas patenka į dabartinę valandą, kaip nustatyta pagal dabartinę sistemos datą ir laiką.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

Nurodo, ar pateikta datos ir laiko reikšmė `dateTime` patenka į dabartinę valandą pagal dabartinę sistemos datą ir laiką.

-   `dateTime`: `datetime` arba `datetimezone` reikšmė turi būti įvertinta.


## Examples

### Example #1
Nustato, ar dabartinis sistemos laikas patenka į dabartinę valandą.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
