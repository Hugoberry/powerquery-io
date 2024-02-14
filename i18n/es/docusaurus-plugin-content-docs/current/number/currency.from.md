---
title: Currency.From
---

# Currency.From


Devuelve un valor monetario para un valor dado.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Devuelve un valor <code>currency</code> del valor <code>value</code> dado. Si <code>value</code> es <code>null</code>, <code>Currency.From</code> devuelve <code>null</code>. Si <code>value</code> es <code>number</code> dentro del rango de moneda, la parte fraccionaria de <code>value</code> se redondea a 4 dígitos decimales y se devuelve. Si <code>value</code> es de otro tipo, se convertirá en un valor <code>number</code> con <code>Number.FromText</code>. El rango válido para la moneda es de <code>-922 337 203 685 477,5808</code> a <code>922 337 203 685 477,5807</code>. Vea <code>Number.Round</code> para los modos de redondeo disponibles. El modo de redondeo predeterminado es <code>RoundingMode.ToEven</code>. También se puede proporcionar un parámetro <code>culture</code> opcional (por ejemplo, "es-ES").


## Examples

### Example #1 
Obtenga el valor &lt;code&gt;currency&lt;/code&gt; de &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt;.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
Obtenga el valor de &lt;code&gt;currency&lt;/code&gt; de &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; con &lt;code&gt;RoundingMode.Down&lt;/code&gt;.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
