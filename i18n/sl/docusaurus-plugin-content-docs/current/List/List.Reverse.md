---
title: List.Reverse
---

# List.Reverse


## Description

Obrne vrsti red vrednosti na seznamu.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Details

Vrne seznam z vrednostmi na seznamu <code>list</code> v obratnem vrstnem redu.


## Examples

### Example #1 
Ustvarite seznam iz \{1..10} v obratnem vrstnem redu.
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
