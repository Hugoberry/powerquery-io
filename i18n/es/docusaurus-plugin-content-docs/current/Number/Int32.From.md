---
title: Int32.From
---

# Int32.From


Crea un entero de 32 bits a partir del valor proporcionado.


## Syntax

```powerquery
Int32.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Devuelve un valor <code>number</code> entero de 32 bits a partir del valor <code>value</code> dado. Si <code>value</code> es <code>null</code>, <code>Int32.From</code> devuelve <code>null</code>. Si <code>value</code> es <code>number</code> en el rango de enteros de 32 bits sin una parte fraccionaria, se devuelve <code>value</code>. Si tiene una parte fraccionaria, el número se redondea con el modo de redondeo que se haya especificado. El modo de redondeo predeterminado es <code>RoundingMode.ToEven</code>. Si <code>value</code> es de otro tipo, se convertirá en un valor <code>number</code> con <code>Number.FromText</code>. Vea <code>Number.Round</code> para conocer los modos de redondeo disponibles. También se puede proporcionar un parámetro <code>culture</code> opcional (por ejemplo, "es-ES").


## Examples

### Example #1 
Obtener el valor &lt;code&gt;number&lt;/code&gt; entero de 32 bits de &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Int32.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Obtener el valor &lt;code&gt;number&lt;/code&gt; entero de 32 bits de &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; con &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Int32.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
