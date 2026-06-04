---
title: List.Percentile
---

# List.Percentile


Egy vagy több, az adott valószínűségeknek megfelelő mintapercentilist ad vissza.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

A(z) `list` lista egy vagy több mintapercentiliseit adja vissza. Ha a(z) `percentiles` érték 0,0 és 1,0 közötti szám, akkor a rendszer percentilisként fogja kezelni, és az eredmény egyetlen, a valószínűségnek megfelelő érték lesz. Ha a(z) `percentiles` érték a 0,0 és 1,0 közötti számok listája, az eredmény percentilisek listája lesz, amely megfelel a bemeneti valószínűségeknek.  
  
A(z) `options` PercentileMode beállítását a tapasztalt felhasználók használhatják egy konkrétabb interpolációs módszer kiválasztására, de a legtöbb felhasználó számára ez nem ajánlott. A `PercentileMode.ExcelInc` és `PercentileMode.ExcelExc` előre definiált szimbólumok megfelelnek az `PERCENTILE.INC` és `PERCENTILE.EXC` Excel-függvények által használt interpolációs módszereknek. Az alapértelmezett viselkedés megegyezik a `PercentileMode.ExcelInc` függvénnyel. A `PercentileMode.SqlCont` és `PercentileMode.SqlDisc` szimbólumok megfelelnek a `PERCENTILE_CONT` és `PERCENTILE_DISC` SQL Serverbeli viselkedésének, megfelelően.


## Examples

### Example #1
Az `{5, 3, 1, 7, 9}` lista első kvartilisának megkeresése.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2
Az `{5, 3, 1, 7, 9}` lista kvartilisának megkeresése egy olyan interpolációs metódus használatával, amely megfelel az Excel `PERCENTILE.EXC` függvényének.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
