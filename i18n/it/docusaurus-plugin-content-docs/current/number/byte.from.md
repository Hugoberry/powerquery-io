---
title: Byte.From
---

# Byte.From


Crea un valore integer a 8 bit dal valore dato.


## Syntax

```powerquery
Byte.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Restituisce un valore <code>numerico</code> integer a 8 bit del dato <code>value</code>. Se il dato <code>value</code> è <code>null</code>, <code>Byte.From</code> restituisce <code>null</code>. Se il dato <code>value</code> è un <code>numero</code> all'interno dell'intervallo di un integer a 8 bit senza una parte frazionaria, viene restituito <code>value</code>. Se ha una parte frazionaria, il numero viene arrotondato con la modalità di arrotondamento specificata. La modalità di arrotondamento predefinita è <code>RoundingMode.ToEven</code>. Se <code>value</code> è di qualsiasi altro tipo, verrà prima convertito in <code>numero</code> usando <code>Number.FromText</code>. Per le modalità di arrotondamento disponibili, vedere <code>Number.Round</code>. È anche possibile specificare un valore <code>culture</code> opzionale (per esempio, "it-IT").


## Examples

### Example #1 
Ottenere il valore &lt;code&gt;number&lt;/code&gt; Integer a 8 bit di &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Byte.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Ottenere il valore &lt;code&gt;number&lt;/code&gt; Integer a 8 bit di &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; usando &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Byte.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
