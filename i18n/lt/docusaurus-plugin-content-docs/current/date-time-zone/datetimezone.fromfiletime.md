---
title: DateTimeZone.FromFileTime
---

# DateTimeZone.FromFileTime


Iš 64 bitų ilgio skaičiaus sukuriama datos ir laiko juosta.


## Syntax

```powerquery
DateTimeZone.FromFileTime(
    fileTime as number
) as datetimezone
```


## Remarks

Iš reikšmės `fileTime` sukuriama `datetimezone` reikšmė ir konvertuojama į vietinę laiko juostą. Failo laikas yra „Windows“ failo laiko reikšmė, nurodanti 100 nanosekundžių intervalų, praėjusių nuo 1601 m. sausio 1 d. 00:00 val. po Kristaus, skaičių. (C.E.) Universalusis laikas (UTC).


## Examples

### Example #1
Konvertuokite `129876402529842245` į datos ir laiko juostos reikšmę.
```powerquery
DateTimeZone.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetimezone(2012, 7, 24, 14, 50, 52.9842245, -7, 0)
```




## Category
DateTimeZone
