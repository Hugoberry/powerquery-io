---
title: Percentage.From
---

# Percentage.From


Devuelve un valor porcentual a partir de un valor determinado.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Devuelve un valor <code>percentage</code> a partir del valor <code>value</code> dado. Si <code>value</code> es <code>null</code>, <code>Percentage.From</code> devuelve <code>null</code>. Si <code>value</code> es <code>text</code> con un símbolo de porcentaje final, se devolverá el número decimal convertido. En caso contrario, se convertirá en un valor <code>number</code> con <code>Number.From</code>. También se puede proporcionar un parámetro <code>culture</code> opcional (por ejemplo, "es-ES").


## Examples

### Example #1 
Obtenga el valor &lt;code&gt;porcentual&lt;/code&gt; de &lt;code&gt;&#34;12,3 %&#34;&lt;/code&gt;.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
