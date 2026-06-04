---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


Nurodo, ar ši data ir laikas patenka į dabartinę sekundę, kaip nustatyta pagal dabartinę sistemos datą ir laiką.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Remarks

Nurodo, ar pateikta datos ir laiko reikšmė `dateTime` patenka į dabartinę sekundę pagal dabartinę sistemos datą ir laiką.

-   `dateTime`: `datetime` arba `datetimezone` reikšmė turi būti įvertinta.


## Examples

### Example #1
Nurodo, ar dabartinis sistemos laikas patenka į dabartinę sekundę.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
