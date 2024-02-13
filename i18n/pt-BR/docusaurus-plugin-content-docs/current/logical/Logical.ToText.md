---
title: Logical.ToText
---

# Logical.ToText


Retorna o texto &#34;true&#34; ou &#34;false&#34; a partir de um valor lógico.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

Cria um valor de texto a partir do valor lógico <code>logicalValue</code>, <code>true</code> ou <code>false</code>. Se <code>logicalValue</code> não for um valor lógico, uma exceção será lançada.


## Examples

### Example #1 
Crie um valor de texto a partir do valor &lt;code&gt;true&lt;/code&gt; lógico.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
