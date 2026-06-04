---
title: Duration.ToText
---

# Duration.ToText


Vrátí textovou reprezentaci formátu d.h:m:s.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Vrátí textovou reprezentaci ve formě „day.hour:mins:sec“ dané hodnoty doby trvání, `duration`.

-   `duration`: `Doba trvání`, ze které je textová reprezentace počítána.
-   `format`: *(Volitelné)* Už není podporováno – pokud není null, vyvolá chybu.


## Examples

### Example #1
Převede řetězec `#duration(2, 5, 55, 20)` na textovou hodnotu.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
