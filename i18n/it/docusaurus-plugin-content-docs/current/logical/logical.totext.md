---
title: Logical.ToText
---

# Logical.ToText


Restituisce il testo &#34;true&#34; o &#34;false&#34; corrispondente a un valore logico.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

Crea un valore di testo dal valore logico <code>logicalValue</code>, <code>true</code> o <code>false</code>. Se <code>logicalValue</code> non è un valore logico, viene generata un'eccezione.


## Examples

### Example #1 
Creare un valore di testo da valore logico &lt;code&gt;true&lt;/code&gt;.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
