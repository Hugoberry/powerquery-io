---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


## Description

Nurodo, ar ši data ir laikas patenka į dabartinę sekundę, kaip nustatyta pagal dabartinę sistemos datą ir laiką.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Details

Nurodo, ar pateikta datos ir laiko reikšmė <code>dateTime</code> patenka į dabartinę sekundę pagal dabartinę sistemos datą ir laiką.      <ul>      <li><code>dateTime</code>: <code>datetime</code> arba <code>datetimezone</code> reikšmė turi būti įvertinta.</li>      </ul>


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
