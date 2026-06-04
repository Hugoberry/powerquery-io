---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


Označuje, ali se ta vrednost"datetime"pojavi v trenutni uri, kot določata trenutni sistemski datum in čas.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

Označuje, ali se navedena vrednost"datetime"`dateTime` pojavi v trenutni uri, kot določata trenutni sistemski datum in čas.

-   `dateTime`: vrednost `datetime` ali `datetimezone`, ki bo ovrednotena.


## Examples

### Example #1
Določite, ali je trenutni sistemski čas v trenutni uri.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
