---
title: Double.From
---

# Double.From


## Description

Crea un Double a partir del valor proporcionado.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Details

Devuelve un valor <code>number</code> Double a partir del valor <code>value</code> dado. Si <code>value</code> es <code>null</code>, <code>Double.From</code> devuelve <code>null</code>. Si <code>value</code> es <code>number</code> en el rango de Double, se devuelve <code>value</code>; en cualquier otro caso, se devuelve un error. Si <code>value</code> es de cualquier otro tipo, se convertirá en un valor <code>number</code> con <code>Number.FromText</code>. También se puede proporcionar un parámetro <code>culture</code> (por ejemplo, "es-ES").


## Examples

### Example #1 
Obtener el valor &lt;code&gt;number&lt;/code&gt; Double de &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
