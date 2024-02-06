---
title: Currency.From
---

# Currency.From


Retorna um valor monetário a partir do valor indicado.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Devolve um valor de <code>currency</code> a partir do <code>value</code> fornecido. Se o fornecido <code>value</code> for <code>null</code>, <code>Currency.From</code> devolve <code>null</code>. Se o fornecido <code>value</code> for <code>number</code> dentro do intervalo monetário, a parte fracional de <code>value</code> é arredondada para 4 dígitos decimais e devolvida. Se o fornecido <code>value</code> for de outro tipo, será primeiro convertido para um <code>number</code> utilizando <code>Number.FromText</code>. Intervalo monetário válido é <code>-922,337,203,685,477.5808</code> para <code>922,337,203,685,477.5807</code>. Consulte o <code>Number.Round</code> para os modos de arredondamento disponíveis. O predefinido é <code>RoundingMode.ToEven</code>. Um opcional <code>culture</code> também poderá ser fornecido (por exemplo, "en-US").


## Examples

### Example #1 
Obtém o valor &lt;code&gt;currency&lt;/code&gt; de &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt;.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
Obtenha o valor &lt;code&gt;currency&lt;/code&gt; de &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; utilizando &lt;code&gt;RoundingMode.Down&lt;/code&gt;.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
