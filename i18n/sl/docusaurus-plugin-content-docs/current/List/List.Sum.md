---
title: List.Sum
---

# List.Sum


## Description

Vrne vsoto elementov na seznamu.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Vrne vsoto neničelnih vrednosti na seznamu, <code>list</code>.  Vrne "null", če na seznamu ni neničelnih vrednosti.


## Examples

### Example #1 
Poiščite vsoto števil na seznamu &lt;code&gt;\{1, 2, 3}&lt;/code&gt;.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
