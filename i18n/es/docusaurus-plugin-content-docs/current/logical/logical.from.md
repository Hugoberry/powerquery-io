---
title: Logical.From
---

# Logical.From


Crea una lógica a partir del valor dado.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Devuelve un valor <code>logical</code> a partir del <code>value</code> especificado. Si el <code>value</code> especificado es <code>null</code>, <code>Logical.From</code> devuelve <code>null</code>. Si el <code>value</code> especificado es <code>logical</code>, se devuelve <code>value</code>. Los valores de los tipos siguientes se pueden convertir a un valor <code>logical</code>:      <ul>        <li><code>text</code>: un valor <code>logical</code> a partir del valor de texto, ya sea <code>"false"</code> o <code>"true"</code>. Para más información, vea <code>Logical.FromText</code>.</li>        <li><code>number</code>: <code>false</code> si <code>value</code> es igual que <code>0</code>, <code>true</code> en caso contrario.</li>      </ul>Si <code>value</code> es de cualquier otro tipo, se devuelve un error.


## Examples

### Example #1 
Convertir &lt;code&gt;2&lt;/code&gt; en un valor &lt;code&gt;logical&lt;/code&gt;.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
