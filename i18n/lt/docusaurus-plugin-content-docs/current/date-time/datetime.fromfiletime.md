---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


Iš 64 bitų ilgio skaičiaus sukuriama data ir laikas.


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Remarks

`datetime` reikšmė sukuriama iš `fileTime` reikšmės ir konvertuojama į vietinę laiko juostą. Failo laikas yra „Windows“ failo laiko reikšmė, nurodanti 100 nanosekundžių intervalų, praėjusių nuo 1601 m. sausio 1 d. 00:00 val. po Kristaus, skaičių. (C.E.) Universalusis laikas (UTC).


## Examples

### Example #1
Konvertuokite `129876402529842245` į datos ir laiko reikšmę.
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
