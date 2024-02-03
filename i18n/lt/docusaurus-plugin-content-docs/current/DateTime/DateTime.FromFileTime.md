---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


## Description

Iš 64 bitų ilgio skaičiaus sukuriama data ir laikas.


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Details

<code>datetime</code> reikšmė sukuriama iš <code>fileTime</code> reikšmės ir konvertuojama į vietinę laiko juostą. Failo laikas yra „Windows“ failo laiko reikšmė, nurodanti 100 nanosekundžių intervalų, praėjusių nuo 1601 m. sausio 1 d. 00:00 val. po Kristaus, skaičių. (C.E.) Universalusis laikas (UTC).


## Examples

### Example #1 
Konvertuokite &lt;code&gt;129876402529842245&lt;/code&gt; į datos ir laiko reikšmę.
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
