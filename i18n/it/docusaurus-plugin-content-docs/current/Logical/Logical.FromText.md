---
title: Logical.FromText
---

# Logical.FromText


## Description

Crea un valore logico dai valori di testo &#34;true&#34; e &#34;false&#34;.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Details

Crea un valore logico dal valore di testo <code>text</code>, "true" o "false". Se <code>text</code> contiene una stringa diversa, viene generata un'eccezione. Il valore di testo <code>text</code> non rispetta la distinzione tra maiuscole e minuscole.


## Examples

### Example #1 
Creare un valore logico dalla stringa di testo &#34;true&#34;.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2 
Creare un valore logico dalla stringa di testo &#34;a&#34;.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
