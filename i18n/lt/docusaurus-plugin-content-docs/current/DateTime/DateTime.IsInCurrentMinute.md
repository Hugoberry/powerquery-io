---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


## Description

Nurodo, ar ši data ir laikas patenka į dabartinę minutę, kaip nustatyta pagal dabartinę sistemos datą ir laiką.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Details

Nurodo, ar pateikta datos ir laiko reikšmė <code>dateTime</code> patenka į dabartinę minutę pagal dabartinę sistemos datą ir laiką.      <ul>      <li><code>dateTime</code>: <code>datetime</code> arba <code>datetimezone</code> reikšmė turi būti įvertinta.</li>      </ul>


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
