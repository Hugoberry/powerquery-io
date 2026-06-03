---
title: Text.Range
---

# Text.Range


Restituisce la sottostringa trovata in corrispondenza dell'offset.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Restituisce la substring dal testo `text` trovata in corrispondenza dell'offset `offset`. Facoltativamente, è possibile includere il parametro `count` per specificare il numero di caratteri da restituire. Genera un errore se il numero di caratteri non è sufficiente.


## Examples

### Example #1
Trovare la sottostringa nel testo "Hello World" a partire dall'indice 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2
Trovare la sottostringa nel testo "Hello World Hello" a partire dall'indice 6 con un'estensione di 5 caratteri.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
