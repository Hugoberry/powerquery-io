---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


## Description

Norāda, vai šī datetime vērtība rodas pašreizējās minūtes laikā, kā to nosaka pašreizējais sistēmas datums un laiks.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Details

Norāda, vai piešķirtā datetime vērtība <code>dateTime</code> rodas pašreizējās minūtes laikā, kā to nosaka pašreizējais sistēmas datums un laiks.      <ul>      <li><code>dateTime</code>: <code>datetime</code> vai <code>datetimezone</code> vērtība, kas jānovērtē.</li>      </ul>


## Examples

### Example #1 
Nosakiet, vai pašreizējais sistēmas laiks ir pašreizējā minūtē.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
