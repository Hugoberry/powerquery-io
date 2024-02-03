---
title: Date.EndOfYear
---

# Date.EndOfYear


## Description

Vráti koniec roka.


## Syntax

```powerquery
Date.EndOfYear(
    dateTime as any
) as any
```


## Details

Vráti koniec roka, ktorý obsahuje hodnotu <code>dateTime</code> vrátane zlomkových sekúnd. Informácie o časovom pásme sa zachovajú.      <ul>        <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code>, z ktorej sa vypočíta koniec roka.</li>      </ul>


## Examples

### Example #1 
Získajte koniec roka pre dátum 14. 5. 2011 a čas 17:00:00.
```powerquery
Date.EndOfYear(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```


### Example #2 
Získajte koniec hodiny pre dátum 17. 5. 2011 a čas 17:00:00 – 7:00.
```powerquery
Date.EndOfYear(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 12, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
