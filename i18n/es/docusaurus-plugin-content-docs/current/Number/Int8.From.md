---
title: Int8.From
---

# Int8.From


## Description

Crea un entero con signo de 8 bits a partir del valor proporcionado.


## Syntax

```powerquery
Int8.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Devuelve un valor <code>number</code> entero de 8 bits firmado a partir del valor <code>value</code> dado. Si <code>value</code> es <code>null</code>, <code>Int8.From</code> devuelve <code>null</code>. Si <code>value</code> es <code>number</code> en el rango de enteros de 8 bits firmados sin una parte fraccionaria, se devuelve <code>value</code>. Si tiene una parte fraccionaria, el número se redondea con el modo de redondeo que se haya especificado. El modo de redondeo predeterminado es <code>RoundingMode.ToEven</code>. Si <code>value</code> es de otro tipo, se convertirá en un valor <code>number</code> con <code>Number.FromText</code>. Vea <code>Number.Round</code> para conocer los modos de redondeo disponibles. También se puede proporcionar un parámetro <code>culture</code> opcional (por ejemplo, "es-ES").


## Examples

### Example #1 
Obtener el valor &lt;code&gt;number&lt;/code&gt; entero con signo de 8 bits de &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Int8.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Obtener el valor &lt;code&gt;number&lt;/code&gt; entero con signo de 8 bits de &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; con &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Int8.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
