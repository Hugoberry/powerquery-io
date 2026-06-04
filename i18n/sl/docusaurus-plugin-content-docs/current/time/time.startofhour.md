---
title: Time.StartOfHour
---

# Time.StartOfHour


Vrne začetek ure.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Remarks

Vrne začetek ure, ki je prikazan kot `dateTime`. `dateTime` mora biti vrednost `time`, `datetime` ali `datetimezone`.


## Examples

### Example #1
Poiščite začetek ure za 10. oktober 2011, 8:10:32.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
