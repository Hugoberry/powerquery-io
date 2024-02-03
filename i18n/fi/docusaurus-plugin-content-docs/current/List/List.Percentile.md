---
title: List.Percentile
---

# List.Percentile


## Description

Palauttaa vähintään yhden esimerkkiprosenttipisteen, joka vastaa annettuja todennäköisyyksiä.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Details

Palauttaa luettelon <code>list</code> yhden tai useamman esimerkkiprosenttipisteen. Jos arvo <code>percentiles</code> on luku 0,0–1,0, sitä kohdellaan prosenttipisteenä, ja tulos on    yksittäinen arvo, joka vastaa kyseistä todennäköisyyttä. Jos arvo <code>percentiles</code> on luettelo lukuja, joiden arvot ovat 0,0–1,0, tulos on syötetodennäköisyyttä    vastaavien prosenttipisteiden luettelo. PercentileMode-asetusta kohteessa <code>options</code> voivat käyttää kokeneet käyttäjät valitsemaan yksityiskohtaisemman interpolointimenetelmän, mutta sitä ei suositella useimpiin käyttötarkoituksiin.    Esimääritetyt symbolit <code>PercentileMode.ExcelInc</code> ja <code>PercentileMode.ExcelExc</code> vastaavat interpolointimentelmiä, joita Excel-funktiot    <code>PERCENTILE.INC</code> ja <code>PERCENTILE.EXC</code> käyttävät. Oletustoiminta vastaa kohdetta <code>PercentileMode.ExcelInc</code>. Symbolit    <code>PercentileMode.SqlCont</code> ja <code>PercentileMode.SqlDisc</code> vastaavat SQL Serverin toimintaa kohteille <code>PERCENTILE_CONT</code> ja    <code>PERCENTILE_DISC</code> tässä järjestyksessä.  


## Examples

### Example #1 
Selvitä luettelon &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; ensimmäinen neljännes.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
Selvitä luettelon &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; neljännekset käyttämällä interpolointimenetelmään, joka vastaa Excelin kohdetta &lt;code&gt;PERCENTILE.EXC&lt;/code&gt;.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
