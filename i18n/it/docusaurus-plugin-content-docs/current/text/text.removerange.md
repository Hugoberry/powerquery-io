---
title: Text.RemoveRange
---

# Text.RemoveRange


Rimuove un numero di caratteri a partire dall'offset specificato


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Restituisce una copia del valore di testo `text` con tutti i caratteri dalla posizione `offset` rimossa. Facoltativamente, è possibile usare il parametro `count` per specificare il numero di caratteri da rimuovere. Il valore predefinito di `count` è 1. I valori delle posizioni iniziano da 0.


## Examples

### Example #1
Rimuovere 1 carattere dal valore di testo "ABEFC" nella posizione 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2
Rimuovere due carattere dal valore di testo "ABEFC" a partire dalla posizione 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
