---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


Norāda, vai šī datetime vērtība rodas pašreizējās sekundes laikā, kā to nosaka pašreizējais sistēmas datums un laiks.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Remarks

Norāda, vai piešķirtā datetime vērtība `dateTime` rodas pašreizējās sekundes laikā, kā to nosaka pašreizējais sistēmas datums un laiks.

-   `dateTime`: `datetime` vai `datetimezone` vērtība, kas jānovērtē.


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
