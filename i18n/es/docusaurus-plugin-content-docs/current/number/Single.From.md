---
title: Single.From
---

# Single.From


Crea un Single a partir del valor proporcionado.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Devuelve un valor <code>number</code> Single a partir del valor <code>value</code> dado. Si <code>value</code> es <code>null</code>, <code>Single.From</code> devuelve <code>null</code>. Si <code>value</code> es <code>number</code> en el rango de Single, se devuelve <code>value</code>; en cualquier otro caso, se devuelve un error. Si <code>value</code> es de cualquier otro tipo, se convertirá en un valor <code>number</code> con <code>Number.FromText</code>. También se puede proporcionar un parámetro <code>culture</code> (por ejemplo, "es-ES").


## Examples

### Example #1 
Obtener el valor &lt;code&gt;number&lt;/code&gt; Single de &lt;code&gt;&#34;1.5&#34;&lt;/code&gt;.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
