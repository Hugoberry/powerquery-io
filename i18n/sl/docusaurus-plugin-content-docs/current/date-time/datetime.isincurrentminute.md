---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


Označuje, ali se ta vrednost"datetime"pojavi v trenutni minuti, kot določata trenutni sistemski datum in čas.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Remarks

Označuje, ali se navedena vrednost"datetime"`dateTime` pojavi v trenutni minuti, kot določata trenutni sistemski datum in čas.

-   `dateTime`: vrednost `datetime` ali `datetimezone`, ki bo ovrednotena.


## Examples

### Example #1
Določite, ali je trenutni sistemski čas v trenutni minuti.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
