---
title: Logical.FromText
---

# Logical.FromText


Crea un valore logico dai valori di testo "true" e "false".


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

Crea un valore logico dal valore di testo `text`, "true" o "false". Se `text` contiene una stringa diversa, viene generato un errore. Il valore di testo `text` non rispetta la distinzione tra maiuscole e minuscole.


## Examples

### Example #1
Creare un valore logico dalla stringa di testo "true".
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2
Creare un valore logico dalla stringa di testo "a".
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
