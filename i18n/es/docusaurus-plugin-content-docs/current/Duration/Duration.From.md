---
title: Duration.From
---

# Duration.From


## Description

Crea una duración a partir del valor dado.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Details

Devuelve un valor <code>duration</code> a partir del <code>value</code> especificado. Si el <code>value</code> especificado es <code>null</code>, <code>Duration.From</code> devuelve <code>null</code>. Si el <code>value</code> especificado es <code>duration</code>, se devuelve <code>value</code>. Los valores de los tipos siguientes se pueden convertir a un valor <code>duration</code>:      <ul>        <li><code>text</code>: un valor <code>duration</code> a partir de los formatos de tiempo transcurrido en forma de texto (d.h:m:s). Para más información, vea <code>Duration.FromText</code>.</li>        <li><code>number</code>: un valor <code>duration</code> equivalente al número de días enteros y fraccionarios expresados por <code>value</code>.</li>      </ul>Si <code>value</code> es de cualquier otro tipo, se devuelve un error.


## Examples

### Example #1 
Convertir &lt;code&gt;2.525&lt;/code&gt; en un valor &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration
