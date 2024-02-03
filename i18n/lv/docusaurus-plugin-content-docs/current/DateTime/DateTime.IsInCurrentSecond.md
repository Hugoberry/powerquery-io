---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


## Description

Norāda, vai šī datetime vērtība rodas pašreizējās sekundes laikā, kā to nosaka pašreizējais sistēmas datums un laiks.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Details

Norāda, vai piešķirtā datetime vērtība <code>dateTime</code> rodas pašreizējās sekundes laikā, kā to nosaka pašreizējais sistēmas datums un laiks.      <ul>      <li><code>dateTime</code>: <code>datetime</code> vai <code>datetimezone</code> vērtība, kas jānovērtē.</li>      </ul>


## Examples

### Example #1 
Nosakiet, vai pašreizējais sistēmas laiks ir pašreizējā sekundē.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
