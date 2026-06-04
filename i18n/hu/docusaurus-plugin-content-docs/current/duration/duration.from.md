---
title: Duration.From
---

# Duration.From


Létrehoz egy időtartamot a megadott értékből.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

Egy időtartam értéket ad vissza az adott értékből.

-   `value`: Az az érték, amelyből az időtartam származik. Ha a megadott `value` `null`, a függvény `null` értéket ad vissza. Ha a megadott `value` egy `időtartam`, akkor `value` lesz visszaadva. A következő típusok értékei konvertálhatók `időtartam` értékké:
    -   `szöveg`: Egy `időtartam` érték szöveges eltelt időformákból (n.ó:m:s). A részletekért lásd: `Duration.FromText`.
    -   `szám`: Egy `időtartam`, amely megegyezik a(z) `value` által kifejezett egész és tört napok számával.

Ha `value` bármilyen más típusú, a rendszer hibát ad vissza.


## Examples

### Example #1
A `2.525` érték konvertálása `duration` értékre
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```


### Example #2
A `2.05:55:20.34567` szöveges érték konvertálása `időtartam` értékre.
```powerquery
Duration.From("2.05:55:20.34567")
```

Result: 
```powerquery
#duration(2, 5, 55, 20.3456700)
```




## Category
Duration
