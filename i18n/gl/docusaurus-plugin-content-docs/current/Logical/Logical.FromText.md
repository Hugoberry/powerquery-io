---
title: Logical.FromText
---

# Logical.FromText


## Description

Crea un valor lóxico a partir dos valores de texto &#34;verdadeiro&#34; e &#34;falso&#34;.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Details

Crea un valor lóxico a partir dos valores de texto <code>text</code>, ou "verdadeiro" ou "falso". Se <code>text</code> contén outra cadea, xérase unha excepción. O valor de texto <code>text</code> non diferencia maiúsculas de minúsculas.


## Examples

### Example #1 
Crea un valor lóxico a partir da cadea de texto &#34;verdadeiro&#34;.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2 
Crear un valor lóxico a partir da cadea de texto &#34;a&#34;.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
