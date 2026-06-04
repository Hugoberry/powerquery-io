---
title: List.Modes
---

# List.Modes


Palauttaa luettelossa useimmin esiintyvien arvojen luettelon.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Palauttaa kohteet, jotka esiintyvät useimmin kohteessa `list`. Jos luettelo on tyhjä, näyttöön tulee virhe. Jos esiintyy useita kohteita, joilla on sama tiheys, palautetaan ne kaikki. Valinnainen vertailuehtoarvo (`equationCriteria`) voidaan määrittää yhtäläisyystestauksen hallintaa varten.


## Examples

### Example #1
Selvittää luettelossa `{"A", 1, 2, 3, 3, 4, 5, 5}` useimmin esiintyvät kohteet.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
