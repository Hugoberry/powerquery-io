---
title: Text.Middle
---

# Text.Middle


Restituisce la sottostringa fino a una lunghezza specificata.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

Restituisce `count` caratteri o fino alla fine di `text`, a partire dall'offset `start`.


## Examples

### Example #1
Trovare la sottostringa nel testo "Hello World" a partire dall'indice 6 con un'estensione di 5 caratteri.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2
Trovare la sottostringa nel testo "Hello World" a partire dall'indice 6 fino alla fine.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```


### Example #3
Trova la substring nel testo "Hello World" a partire dall'indice 0 con un'estensione di 2 caratteri.
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction
