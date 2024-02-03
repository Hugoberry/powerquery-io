---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


## Description

Norāda, vai šī datetime vērtība rodas pašreizējās stundas laikā, kā to nosaka pašreizējais sistēmas datums un laiks.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Details

Norāda, vai piešķirtā datetime vērtība <code>dateTime</code> rodas pašreizējās stundas laikā, kā to nosaka pašreizējais sistēmas datums un laiks.      <ul>      <li><code>dateTime</code>: <code>datetime</code> vai <code>datetimezone</code> vērtība, kas jānovērtē.</li>      </ul>


## Examples

### Example #1 
Nosakiet, vai pašreizējais sistēmas laiks ir pašreizējā stundā.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
