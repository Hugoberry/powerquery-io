---
title: List.ReplaceRange
---

# List.ReplaceRange


## Description

Pakeičiamas reikšmių eilės skaičius pradedant nuo padėties su pakeitimo reikšmėmis.


## Syntax

```powerquery
List.ReplaceRange(
    list as list,
    index as number,
    count as number,
    replaceWith as list
) as list
```


## Details

<code>count</code> reikšmės, esančios <code>list</code>, pakeičiamos sąrašu <code>replaceWith</code>, pradedant nuo nurodytos padėties, <code>index</code>.


## Examples

### Example #1 
Sąraše \{1, 2, 7, 8, 9, 5} pakeiskite \{7, 8, 9} į \{3, 4}.
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
