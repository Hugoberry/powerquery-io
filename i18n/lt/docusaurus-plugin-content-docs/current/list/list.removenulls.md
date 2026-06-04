---
title: List.RemoveNulls
---

# List.RemoveNulls


Pašalinamos visos neapibrėžtos reikšmės iš nurodyto sąrašo.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Remarks

Pašalinami visi neapibrėžtų reikšmių atvejai, esantys `list`. Jei sąraše neapibrėžtų reikšmių nėra, pateikiamas pradinis sąrašas.


## Examples

### Example #1
Pašalinkite visas neapibrėžtas reikšmes iš sąrašo \{1, 2, 3, null, 4, 5, null, 6\}.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
