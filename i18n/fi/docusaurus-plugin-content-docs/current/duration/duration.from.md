---
title: Duration.From
---

# Duration.From


Luo keston annetusta arvosta.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

Palauttaa kestoarvon annetusta arvosta.

-   `value`: Arvo, josta kesto johdetaan. Jos annettu `value` on `null`, tämä funktio palauttaa arvon `null`. Jos annettu `value` on `duration`, `value` palautetaan. Seuraavien tyyppien arvot voidaan muuntaa `duration`\-arvoksi:
    -   `text`: `duration`\-arvo tekstimuotoisista kuluneen ajan muodoista (d.h:m:s). Katso lisätietoja kohdasta `Duration.FromText`.
    -   `number`: `duration`, joka vastaa kohteen `value` ilmaisemia kokonaisia päiviä ja päivien osia.

Jos `value` on jotakin muuta tyyppiä, palautetaan virhe.


## Examples

### Example #1
Muunna `2.525` `duration`\-arvoksi.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```


### Example #2
Muunna tekstiarvo `"2.05:55:20.34567"` `duration`\-arvoksi.
```powerquery
Duration.From("2.05:55:20.34567")
```

Result: 
```powerquery
#duration(2, 5, 55, 20.3456700)
```




## Category
Duration
