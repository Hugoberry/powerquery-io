---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


Ustvari vrednost"datetime"iz 64 bitov dolgega števila.


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Remarks

Ustvari vrednost `datetime` iz vrednosti `fileTime` in jo pretvori v lokalni časovni pas. Vrednost"filetime"je vrednost časa datoteke Windows, ki predstavlja 100-nanosekundne intervale, ki so pretekli od polnoči dne 1. januarja 1601 n. š. (C.E.) Coordinated Universal Time (UTC).


## Examples

### Example #1
Pretvorite `129876402529842245` v vrednost"datetime".
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
