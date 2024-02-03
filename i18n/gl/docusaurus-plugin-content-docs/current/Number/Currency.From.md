---
title: Currency.From
---

# Currency.From


## Description

Devolve un valor de moeda para o valor dado.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Devolve un valor de <code>currency</code> a partir do<code>value</code> indicado. Se o <code>value</code> indicado é <code>null</code>, <code>Currency.From</code> devolve <code>null</code>. Se o <code>value</code> indicado é <code>number</code> dentro do intervalo de moeda, a parte fraccionaria de <code>value</code> arredóndase a 4 díxitos decimais e devólvese. Se <code>value</code> é doutro tipo, primeiro converterase nun <code>number</code> usando <code>Number.FromText</code>. O intervalo válido de moeda é de <code>-922.337.203.685.477,5808</code> a <code>922.337.203.685.477,5807</code>. Consulte <code>Number.Round</code> para coñecer os modos de arredondamento dispoñibles. O valor predefinido é <code>RoundingMode.ToEven</code>. Tamén se pode fornecer un <code>culture</code> opcional (por exemplo, "gl-ES").


## Examples

### Example #1 
Obteña o valor &lt;code&gt;currency&lt;/code&gt; de &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt;.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
Obteña o valor &lt;code&gt;currency&lt;/code&gt; de &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; mediante &lt;code&gt;RoundingMode.Down&lt;/code&gt;.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
