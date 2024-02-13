---
title: Logical.From
---

# Logical.From


Cria um valor lógico a partir do valor especificado.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Devolve um valor <code>logical</code> a partir do <code>value</code> especificado. Se o <code>value</code> especificado for <code>null</code>, <code>Logical.From</code> devolve <code>null</code>.  Se o <code>value</code> especificado for <code>logical</code>, será devolvido <code>value</code>. É possível converter os seguintes tipos de valor num valor <code>logical</code>:      <ul>        <li><code>text</code>: um valor <code>logical</code> do valor de texto <code>"true"</code> ou <code>"false"</code>. Consulte <code>Logical.FromText</code> para obter detalhes.</li>        <li><code>number</code>: <code>false</code> se <code>value</code> for igual a <code>0</code>, <code>true</code> caso contrário.</li>      </ul>Se <code>value</code> for de qualquer outro tipo, será devolvido um erro.


## Examples

### Example #1 
Converter &lt;code&gt;2&lt;/code&gt; num valor &lt;code&gt;logical&lt;/code&gt;.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
