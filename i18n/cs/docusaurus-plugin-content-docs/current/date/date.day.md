---
title: Date.Day
---

# Date.Day


Vrátí komponentu dne.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Vrátí komponentu dne předané hodnoty `date`, `datetime` nebo `datetimezone`.

-   `dateTime`: Hodnota `date`, `datetime` nebo `datetimezone`, ze které se extrahuje komponenta dne.


## Examples

### Example #1
Získat komponentu dne z hodnoty `date`, `datetime` nebo `datetimezone` představující datum 14. 5. 2011, čas 17:00:00.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
