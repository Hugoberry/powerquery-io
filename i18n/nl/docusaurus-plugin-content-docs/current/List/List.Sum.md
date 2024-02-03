---
title: List.Sum
---

# List.Sum


## Description

Retourneert de som van de items in de lijst.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Retourneert de som van de waarden in de lijst <code>list</code> die niet gelijk zijn aan nul.  Retourneert null als er in de lijst geen waarden staan die niet gelijk zijn aan nul.


## Examples

### Example #1 
De som van de getallen in de lijst &lt;code&gt;\{1, 2, 3}&lt;/code&gt; zoeken.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
