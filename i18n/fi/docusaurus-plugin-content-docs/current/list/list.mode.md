---
title: List.Mode
---

# List.Mode


Palauttaa luettelon useimmin esiintyvän arvon.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

Palauttaa kohteen, joka esiintyy useimmin kohteessa `list`. Jos luettelo on tyhjä, näyttöön tulee virhe. Jos esiintyy useita kohteita, joilla on sama tiheys, valitaan viimeinen. Valinnainen vertailuehtoarvo (`equationCriteria`) voidaan määrittää yhtäläisyystestauksen hallintaa varten.


## Examples

### Example #1
Selvittää luettelossa `{"A", 1, 2, 3, 3, 4, 5}` useimmin esiintyvän kohteen.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2
Selvittää luettelossa `{"A", 1, 2, 3, 3, 4, 5, 5}` useimmin esiintyvän kohteen.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
