---
title: Logical.From
---

# Logical.From


Kreira logičku vrednost od date vrednosti.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Vraća vrednost `logical` od datog `value`. Ako dati `value` predstavlja `null`, `Logical.From` vraća `null`. Ako dati `value` predstavlja `logical`, vraća se `value`. Vrednosti sledećih tipova se mogu konvertovati u vrednost `logical`:

-   `text`: Vrednost `logical` od tekstualne vrednosti, bilo `"true"` ili `"false"`. Pogledajte `Logical.FromText` za detalje.
-   `number`: `false` ako je `value` jednako `0`, a `true` ako nije.

Ako je `value` nekog drugog tipa, vraća se greška.


## Examples

### Example #1
Konvertovanje `2` u `logical` vrednost.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
