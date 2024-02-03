---
title: List.Percentile
---

# List.Percentile


## Description

Egy vagy több, az adott valószínűségeknek megfelelő mintapercentilist ad vissza.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Details

A(z) <code>list</code> lista egy vagy több mintapercentiliseit adja vissza. Ha a(z) <code>percentiles</code> érték 0,0 és 1,0 közötti szám, akkor a rendszer percentilisként fogja kezelni, és az eredmény    a valószínűségnek megfelelő egyetlen érték. Ha a(z) <code>percentiles</code> érték a 0,0 és a 1,0 közötti értékekkel rendelkező számok listája, az eredmény    a bemeneti valószínűségnek megfelelő percentilisek listája lesz. A(z) <code>options</code> PercentileMode beállítását a tapasztalt felhasználók használhatják egy konkrétabb interpolációs módszer kiválasztására, de a legtöbb felhasználó számára ez nem ajánlott.    A <code>PercentileMode.ExcelInc</code> és <code>PercentileMode.ExcelExc</code> előre definiált szimbólumok megfelelnek az    <code>PERCENTILE.INC</code> és <code>PERCENTILE.EXC</code> Excel-függvények által használt interpolációs metódusoknak. Az alapértelmezett viselkedés megegyezik a <code>PercentileMode.ExcelInc</code> függvényével. A    <code>PercentileMode.SqlCont</code> és <code>PercentileMode.SqlDisc</code> szimbólumok megfelelnek a <code>PERCENTILE_CONT</code> és    <code>PERCENTILE_DISC</code> SQL Serverbeli viselkedésének.  


## Examples

### Example #1 
Az &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; lista első kvartilisának megkeresése.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
Az &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; lista kvartilisának megkeresése egy olyan interpolációs metódus használatával, amely megfelel az Excel &lt;code&gt;PERCENTILE.EXC&lt;/code&gt; függvényének.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
