---
title: List.Mode
---

# List.Mode


## Description

Palauttaa luettelon useimmin esiintyvän arvon.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Details

Palauttaa luettelossa <code>list</code> useimmin esiintyvän kohteen. Jos luettelo on tyhjä, tapahtuu poikkeus. Jos samalla enimmäistiheydellä esiintyviä kohteita on luettelossa useita, niistä viimeinen valitaan.    Valinnainen <code>comparisonCriteria</code>-arvo <code>equationCriteria</code> voidaan määrittää ohjaamaan samanlaisuustestausta. 


## Examples

### Example #1 
Selvittää luettelossa &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5}&lt;/code&gt; useimmin esiintyvän kohteen.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2 
Selvittää luettelossa &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt; useimmin esiintyvän kohteen.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
