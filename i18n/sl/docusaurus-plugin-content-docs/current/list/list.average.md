---
title: List.Average
---

# List.Average


Vrne povprečje vrednosti. Deluje z vrednostmi"number","date","datetime","datetimezone"in"duration".


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Vrne povprečno vrednost za elemente na seznamu, `list`. Rezultat je prikazan v enaki vrsti podatkov kot vrednosti na seznamu. Deluje le z vrednostmi"number","date","time","datetime","datetimezone"in"duration". Če je seznam prazen, je vrnjena vrednost"null".


## Examples

### Example #1
Poiščite povprečje seznama števil, `{3, 4, 6}`.
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2
Poiščite povprečje datumskih vrednosti 1. januar 2011, 2. januar 2011 in 3. januar 2011.
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages
