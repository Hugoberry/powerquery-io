---
title: Logical.FromText
---

# Logical.FromText


Crea un valor lógico a partir de los valores de texto &#34;true&#34; y &#34;false&#34;.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

Crea un valor lógico a partir de los valores de texto <code>text</code>, ya sean "true" o "false". Si <code>text</code> contiene otra cadena, se inicia una excepción. El valor de texto <code>text</code> no distingue entre mayúsculas y minúsculas.


## Examples

### Example #1 
Crear un valor lógico a partir de la cadena de texto &#34;true&#34;.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2 
Crear un valor lógico a partir de la cadena de texto &#34;a&#34;.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
