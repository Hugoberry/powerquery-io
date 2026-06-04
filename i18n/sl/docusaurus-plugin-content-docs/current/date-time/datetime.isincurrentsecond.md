---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


Označuje, ali se ta vrednost"datetime"pojavi v trenutni sekundi, kot določata trenutni sistemski datum in čas.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Remarks

Označuje, ali se navedena vrednost"datetime"`dateTime` pojavi v trenutni sekundi, kot določata trenutni sistemski datum in čas.

-   `dateTime`: vrednost `datetime` ali `datetimezone`, ki bo ovrednotena.


## Examples

### Example #1
Določite, ali je trenutni sistemski čas v trenutni sekundi.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
