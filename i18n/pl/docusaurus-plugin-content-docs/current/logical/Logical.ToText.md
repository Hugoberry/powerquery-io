---
title: Logical.ToText
---

# Logical.ToText


Zwraca tekst „true” lub „false” odpowiadający danej wartości logicznej.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

Tworzy wartość tekstową na podstawie wartości logicznej <code>logicalValue</code> (<code>true</code> lub <code>false</code>). Jeśli wartość parametru <code>logicalValue</code> nie jest wartością logiczną, jest zwracany wyjątek.


## Examples

### Example #1 
Utwórz wartość tekstową na podstawie wartości logicznej &lt;code&gt;true&lt;/code&gt;.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
