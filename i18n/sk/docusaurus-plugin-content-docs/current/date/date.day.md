---
title: Date.Day
---

# Date.Day


Vráti komponent dňa.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Vráti komponent dňa z hodnoty `date`, `datetime` alebo `datetimezone`.

-   `dateTime`: Hodnota `date`, `datetime` alebo `datetimezone`, z ktorej sa extrahuje komponent dňa.


## Examples

### Example #1
Získajte komponent dňa hodnoty `date`, `datetime` alebo `datetimezone` predstavujúcej dátum 14. 5. 2011 a čas 17:00:00.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
