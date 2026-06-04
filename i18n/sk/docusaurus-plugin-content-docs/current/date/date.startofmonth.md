---
title: Date.StartOfMonth
---

# Date.StartOfMonth


Vráti začiatok mesiaca.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Remarks

Vráti začiatok mesiaca, ktorý obsahuje hodnotu `dateTime`. `dateTime` musí byť hodnota `date` alebo `datetime`.


## Examples

### Example #1
Nájdite začiatok mesiaca pre dátum 10. október 2011 a čas 8:10:32.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
