---
title: Logical.From
---

# Logical.From


Cria uma lógica a partir do valor especificado.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Retorna um valor <code>logical</code> com base no <code>value</code> especificado. Se o <code>value</code> especificado for <code>null</code>, <code>Logical.From</code> retornará <code>null</code>. Se o <code>value</code> especificado for <code>logical</code>, <code>value</code> será retornado. Os valores dos tipos a seguir podem ser convertidos em um valor <code>logical</code>:      <ul>        <li><code>text</code>: um valor <code>logical</code> do valor de texto, <code>"true"</code> ou <code>"false"</code>. Consulte <code>Logical.FromText</code> para obter informações detalhadas.</li>        <li><code>number</code>: <code>false</code> se <code>value</code> for igual a <code>0</code>; do contrário, <code>true</code> será retornado.</li>      </ul>Se <code>value</code> for de qualquer outro tipo, um erro será retornado.


## Examples

### Example #1 
Converta &lt;code&gt;2&lt;/code&gt; em um valor &lt;code&gt;logical&lt;/code&gt;.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
