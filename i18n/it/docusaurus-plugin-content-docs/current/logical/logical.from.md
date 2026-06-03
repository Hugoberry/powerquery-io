---
title: Logical.From
---

# Logical.From


Crea una logica dal valore specificato.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Restituisce un valore `logical` dall'elemento `value` specificato. Se l'elemento specificato `value` è `null`, `Logical.From` restituisce `null`. Se l'elemento specificato `value` è `logical`, viene restituito `value`. I valori dei tipi seguenti possono essere convertiti in un valore `logical`:

-   `text`: valore `logical` dal valore di testo, `"true"` o `"false"`. Per informazioni, vedere `Logical.FromText`.
-   `number`: `false` se `value` è uguale a `0`, in caso contrario `true`.

Se `value` è di altro tipo, viene restituito un errore.


## Examples

### Example #1
Converte `2` in un valore `logical`.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
