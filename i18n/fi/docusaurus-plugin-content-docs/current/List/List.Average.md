---
title: List.Average
---

# List.Average


## Description

Palauttaa arvojen keskiarvon. Toimii number-, date-, datetime-, datetimezone- ja duration-arvojen kanssa.


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Palauttaa luettelon <code>list</code> kohteiden keskiarvon. Tulos annetaan samana tietotyyppiä, joka luettelon arvoilla on. Toimii vain number-, date-, time-, datetime-, datetimezone- ja duration-arvojen kanssa.    Jos luettelo on tyhjä, palautetaan tyhjäarvo.


## Examples

### Example #1 
Selvitä luettelon lukujen &lt;code&gt;\{3, 4, 6}&lt;/code&gt; keskiarvo.
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2 
Selvitä päivämääräarvojen 1. tammikuuta 2011, 2. tammikuuta 2011 ja 3. tammikuuta 2011 keskiarvo.
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages
