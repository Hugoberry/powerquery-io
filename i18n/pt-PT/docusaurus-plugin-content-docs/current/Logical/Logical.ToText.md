---
title: Logical.ToText
---

# Logical.ToText


Devolve o texto &#34;true&#34; ou &#34;false&#34; com base num valor lógico especificado.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

Cria um valor de texto a partir do valor lógico <code>logicalValue</code>, <code>true</code> ou <code>false</code>. Se <code>logicalValue</code> não for um valor lógico, é emitida uma exceção.


## Examples

### Example #1 
Criar um valor de texto a partir do valor lógico &lt;code&gt;true&lt;/code&gt;.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
