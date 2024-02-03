---
title: Text.Range
---

# Text.Range


## Description

Restituisce la sottostringa trovata in corrispondenza dell&#39;offset.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Restituisce la sottostringa dal testo <code>text</code> trovata in corrispondenza dell'offset <code>offset</code>.    Facoltativamente, è possibile includere il parametro <code>count</code> per specificare il numero di caratteri da restituire. Genera un errore se il numero di caratteri non è sufficiente.


## Examples

### Example #1 
Trovare la sottostringa nel testo &#34;Hello World&#34; a partire dall&#39;indice 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
Trovare la sottostringa nel testo &#34;Hello World Hello&#34; a partire dall&#39;indice 6 con un&#39;estensione di 5 caratteri.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
