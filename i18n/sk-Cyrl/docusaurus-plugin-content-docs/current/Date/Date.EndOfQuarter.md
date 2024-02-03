---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


## Description

Vráti koniec štvrťroka.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Details

Vráti koniec štvrťroka, ktorý obsahuje hodnotu <code>dateTime</code>. Informácie o časovom pásme sa zachovajú.      <ul>        <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code>, z ktorej sa vypočíta koniec štvrťroka.</li>      </ul>


## Examples

### Example #1 
Nájdite koniec štvrťroka pre dátum 10. október 2011 a čas 8:00.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
