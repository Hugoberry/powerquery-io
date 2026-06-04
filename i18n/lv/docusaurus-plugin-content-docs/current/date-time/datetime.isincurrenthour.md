---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


Norāda, vai šī datetime vērtība rodas pašreizējās stundas laikā, kā to nosaka pašreizējais sistēmas datums un laiks.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

Norāda, vai piešķirtā datetime vērtība `dateTime` rodas pašreizējās stundas laikā, kā to nosaka pašreizējais sistēmas datums un laiks.

-   `dateTime`: `datetime` vai `datetimezone` vērtība, kas jānovērtē.


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
