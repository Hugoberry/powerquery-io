---
title: List.Modes
---

# List.Modes


## Description

Palauttaa luettelossa useimmin esiintyvien arvojen luettelon.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Palauttaa luettelossa <code>list</code> useimmin esiintyvän kohteen. Jos luettelo on tyhjä, tapahtuu poikkeus. Jos samalla enimmäistiheydellä esiintyviä kohteita on luettelossa useita, niistä viimeinen valitaan.    Valinnainen <code>comparisonCriteria</code>-arvo <code>equationCriteria</code> voidaan määrittää ohjaamaan samanlaisuustestausta. 


## Examples

### Example #1 
Selvittää luettelossa &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt; useimmin esiintyvät kohteet.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
