---
title: Duration.From
---

# Duration.From


Creează o durată din valoarea dată.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

Returnează o valoare durată din valoarea dată.

-   `value`: valoarea din care este derivată durata. Dacă valoarea `value` dată este `null`, această funcție returnează `null`. Dacă valoarea `value` dată este o `duration`, se returnează `value`. Următoarele tipuri de valori pot fi convertite într-o valoare `duration`:
    -   `text`: o valoare `duration` din formele textuale de timp scurs (z.o:m:s). Consultați `Duration.FromText` pentru detalii.
    -   `number`: o valoare `duration` echivalentă cu numărul de zile întregi și fracționare exprimate prin `value`.

Dacă `value` este de orice alt tip, se returnează o eroare.


## Examples

### Example #1
Convertiţi `2.525` într-o valoare `duration`.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```


### Example #2
Efectuați conversia valorii text `"2.05:55:20.34567"` într-o valoare `duration`.
```powerquery
Duration.From("2.05:55:20.34567")
```

Result: 
```powerquery
#duration(2, 5, 55, 20.3456700)
```




## Category
Duration
