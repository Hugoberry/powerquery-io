---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


Udáva, či tento dátum a čas pripadá na aktuálnu minútu, podľa určenia na základe aktuálneho dátumu a času v systéme.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Remarks

Udáva, či daná hodnota dátumu a času `dateTime` pripadá na aktuálnu minútu, podľa určenia na základe aktuálneho dátumu a času v systéme.

-   `dateTime`: Hodnota `datetime` alebo `datetimezone`, ktorá sa má vyhodnotiť.


## Examples

### Example #1
Určte, či sa aktuálny systémový čas nachádza v aktuálnej minúte.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
