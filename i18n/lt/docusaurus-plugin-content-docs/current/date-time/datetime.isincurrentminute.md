---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


Nurodo, ar ši data ir laikas patenka į dabartinę minutę, kaip nustatyta pagal dabartinę sistemos datą ir laiką.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Remarks

Nurodo, ar pateikta datos ir laiko reikšmė `dateTime` patenka į dabartinę minutę pagal dabartinę sistemos datą ir laiką.

-   `dateTime`: `datetime` arba `datetimezone` reikšmė turi būti įvertinta.


## Examples

### Example #1
Nustato, ar dabartinis sistemos laikas patenka į dabartinę minutę.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
