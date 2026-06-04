---
title: Logical.From
---

# Logical.From


Creează o valoare logical din valoarea dată.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Returnează o valoare `logical` din `value` dat. Dacă `value` dat este `null`, `Logical.From` returnează `null`. Dacă `value` dat este `logical`, se returnează `value`. Valorile următoarelor tipuri pot fi convertite la o valoare `logical`:

-   `text`: o valoare `logical` din valoarea text, fie `„true”`, fie `„false”`. Pentru detalii, consultați `Logical.FromText`.
-   `number`: `false` dacă `value` este egal cu `0`; în caz contrar, `true`.

Dacă `value` este de orice alt tip, se returnează o eroare.


## Examples

### Example #1
Convertiţi `2` la o valoare `logical`.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
