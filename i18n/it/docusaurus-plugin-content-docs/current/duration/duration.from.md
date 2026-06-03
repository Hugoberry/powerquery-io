---
title: Duration.From
---

# Duration.From


Crea un elemento duration dal valore specificato.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

Restituisce un valore di durata dal valore specificato.

-   `value`: il valore da cui viene derivata la durata. Se il valore specificato `value` è `null`, questa funzione restituisce `null`. Se il valore specificato `value` è la `durata`, viene restituito `value`. I valori dei tipi seguenti possono essere convertiti in un valore di `durata`:
    -   `text`: un valore di `durata` dalle forme testuali del tempo trascorso (d.h:m:s). Per informazioni dettagliate, vedere `Date.FromText`.
    -   `numero`: un valore di `durata` equivalente al numero di giorni interi e frazionari espresso da `value`.

Se `value` è di qualsiasi altro tipo, viene restituito un errore.


## Examples

### Example #1
Converte `2.525` in un valore `duration`.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```


### Example #2
Converte il valore di testo `"2.05:55:20.34567"` in un valore di `durata`.
```powerquery
Duration.From("2.05:55:20.34567")
```

Result: 
```powerquery
#duration(2, 5, 55, 20.3456700)
```




## Category
Duration
