---
title: Text.RemoveRange
---

# Text.RemoveRange


## Description

Rimuove un numero di caratteri a partire dall&#39;offset specificato


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Restituisce una copia del valore di testo <code>text</code> con tutti i caratteri dalla posizione <code>offset</code> rimossa.    Facoltativamente, è possibile usare il parametro <code>count</code> per specificare il numero di caratteri da rimuovere. Il valore predefinito di <code>count</code> è 1. I valori delle posizioni iniziano da 0.


## Examples

### Example #1 
Rimuovere 1 carattere dal valore di testo &#34;ABEFC&#34; nella posizione 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2 
Rimuovere due carattere dal valore di testo &#34;ABEFC&#34; a partire dalla posizione 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
