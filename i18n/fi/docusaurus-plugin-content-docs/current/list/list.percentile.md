---
title: List.Percentile
---

# List.Percentile


Palauttaa vähintään yhden esimerkkiprosenttipisteen, joka vastaa annettuja todennäköisyyksiä.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

Palauttaa luettelon `list` yhden tai useamman esimerkkiprosenttipisteen. Jos arvo `percentiles` on luku 0,0–1,0, sitä kohdellaan prosenttipisteenä, ja tulos on yksittäinen arvo, joka vastaa kyseistä todennäköisyyttä. Jos arvo `percentiles` on luettelo lukuja, joiden arvot ovat 0,0–1,0, tulos on syötetodennäköisyyttä vastaavien prosenttipisteiden luettelo.  
  
PercentileMode-asetusta kohteessa `options` voivat käyttää kokeneet käyttäjät valitsemaan yksityiskohtaisemman interpolointimenetelmän, mutta sitä ei suositella useimpiin käyttötarkoituksiin. Esimääritetyt symbolit `PercentileMode.ExcelInc` ja `PercentileMode.ExcelExc` vastaavat interpolointimentelmiä, joita Excel-funktiot `PERCENTILE.INC` ja `PERCENTILE.EXC` käyttävät. Oletustoiminta vastaa kohdetta `PercentileMode.ExcelInc`. Symbolit `PercentileMode.SqlCont` ja `PercentileMode.SqlDisc` vastaavat SQL Serverin toimintaa kohteille `PERCENTILE_CONT` ja `PERCENTILE_DISC` tässä järjestyksessä.


## Examples

### Example #1
Selvitä luettelon `{5, 3, 1, 7, 9}` ensimmäinen neljännes.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2
Selvitä luettelon `{5, 3, 1, 7, 9}` neljännekset käyttämällä interpolointimenetelmään, joka vastaa Excelin kohdetta `PERCENTILE.EXC`.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
