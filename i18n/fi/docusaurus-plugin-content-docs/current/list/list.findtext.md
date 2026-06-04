---
title: List.FindText
---

# List.FindText


Palauttaa luettelon arvoista (mukaan lukien tietuekentät), jotka sisältävät määritetyn tekstin.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

Palauttaa luettelosta `list` luettelon arvoista, jotka sisälsivät arvon `text`.


## Examples

### Example #1
Selvitä arvoa "a" vastaavat tekstiarvot luettelosta \{"a", "b", "ab"\}.
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
