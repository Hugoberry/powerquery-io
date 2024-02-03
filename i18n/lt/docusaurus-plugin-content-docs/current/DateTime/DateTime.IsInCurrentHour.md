---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


## Description

Nurodo, ar ši data ir laikas patenka į dabartinę valandą, kaip nustatyta pagal dabartinę sistemos datą ir laiką.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Details

Nurodo, ar pateikta datos ir laiko reikšmė <code>dateTime</code> patenka į dabartinę valandą pagal dabartinę sistemos datą ir laiką.      <ul>      <li><code>dateTime</code>: <code>datetime</code> arba <code>datetimezone</code> reikšmė turi būti įvertinta.</li>      </ul>


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
