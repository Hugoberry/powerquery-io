---
title: List.Sum
---

# List.Sum


## Description

Palauttaa luettelon kohteiden summan.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Palauttaa luettelon <code>list</code> muiden kuin tyhjäarvoisten arvojen summan.  Palauttaa tyhjäarvon, jos luettelossa ei ole muita kuin tyhjäarvoja.


## Examples

### Example #1 
Selvitä luettelon &lt;code&gt;\{1, 2, 3}&lt;/code&gt; lukujen summa.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
