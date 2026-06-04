---
title: Duration.From
---

# Duration.From


Kreira trajanje od date vrednosti.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

Vraća vrednost trajanja iz date vrednosti.

-   `value`: Vrednost iz koje se izvodi trajanje. Ako je data vrednost `value` `null`, ova funkcija vraća `null`. Ako data vrednost `value` predstavlja `duration`, vraća se `value`. Vrednosti sledećih tipova mogu da se konvertuju u vrednost `duration` vrednost:
    -   `text`: A `duration` vrednost iz tekstualnih oblika proteklog vremena (d.h:m:s). Pogledajte `Duration.FromText` za detalje.
    -   `number`: A `duration` ekvivalentna broju celih i frakcionih dana izraženih u `value`.

Ako je `value` bilo kog drugog tipa, vraća se greška.


## Examples

### Example #1
Konvertovanje `2.525` u vrednost `duration`.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```


### Example #2
Konvertujte vrednost teksta `"2.05:55:20.34567"` u vrednost `duration`.
```powerquery
Duration.From("2.05:55:20.34567")
```

Result: 
```powerquery
#duration(2, 5, 55, 20.3456700)
```




## Category
Duration
