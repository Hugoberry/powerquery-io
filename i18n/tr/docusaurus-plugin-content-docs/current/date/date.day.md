---
title: Date.Day
---

# Date.Day


Gün bileşenini döndürür.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Verilen `date`, `datetime` veya `datetimezone` değerinin gün bileşenini döndürür.

-   `dateTime`: Gün bileşeninin ayıklandığı bir `date`, `datetime` veya `datetimezone` değeri.


## Examples

### Example #1
14.05.2011 17:00:00 tarih ve saatini temsil eden `date`, `datetime` veya `datetimezone` değerinin gün bileşenini alır.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
