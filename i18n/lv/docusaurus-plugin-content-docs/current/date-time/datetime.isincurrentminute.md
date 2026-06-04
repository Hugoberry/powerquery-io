---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


Norāda, vai šī datetime vērtība rodas pašreizējās minūtes laikā, kā to nosaka pašreizējais sistēmas datums un laiks.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Remarks

Norāda, vai piešķirtā datetime vērtība `dateTime` rodas pašreizējās minūtes laikā, kā to nosaka pašreizējais sistēmas datums un laiks.

-   `dateTime`: `datetime` vai `datetimezone` vērtība, kas jānovērtē.


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
