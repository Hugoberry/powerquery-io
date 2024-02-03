---
title: Date.StartOfMonth
---

# Date.StartOfMonth


## Description

Vráti začiatok mesiaca.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Details

Vráti začiatok mesiaca, ktorý obsahuje hodnotu <code>dateTime</code>.    <code>dateTime</code> musí byť hodnota <code>date</code> alebo <code>datetime</code>.


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
