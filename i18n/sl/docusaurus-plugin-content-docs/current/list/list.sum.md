---
title: List.Sum
---

# List.Sum


Vrne vsoto elementov na seznamu.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Vrne vsoto neničelnih vrednosti na seznamu, `list`. Vrne"null", če na seznamu ni neničelnih vrednosti.


## Examples

### Example #1
Poiščite vsoto števil na seznamu `{1, 2, 3}`.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
