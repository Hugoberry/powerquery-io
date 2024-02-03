---
title: Date.EndOfMonth
---

# Date.EndOfMonth


## Description

Vráti koniec mesiaca.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Details

Vráti koniec mesiaca, ktorý obsahuje hodnotu <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code>, z ktorej sa vypočíta koniec mesiaca.</li>      </ul>


## Examples

### Example #1 
Získajte koniec mesiaca pre dátum 14. 5. 2011.
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2 
Získajte koniec mesiaca pre dátum 17. 5. 2011 a čas 17:00:00 – 7:00.
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
