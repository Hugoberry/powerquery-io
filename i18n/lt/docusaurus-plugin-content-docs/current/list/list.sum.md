---
title: List.Sum
---

# List.Sum


Pateikiama sąrašo elementų suma.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Pateikiama ne neapibrėžtų sąrašo reikšmių suma, `list`. Jei sąraše nėra ne neapibrėžtų reikšmių, pateikiamas rezultatas yra lygus nuliui.


## Examples

### Example #1
Raskite skaičių sumą sąraše `{1, 2, 3}`.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
