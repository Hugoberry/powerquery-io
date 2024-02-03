---
title: Currency.From
---

# Currency.From


## Description

Torna un valor de moneda del valor proporcionat.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Retorna un valor <code>currency</code> a partir del valor <code>value</code> proporcionat. Si el valor <code>value</code> proporcionat és <code>null</code>, <code>Currency.From</code> retorna <code>null</code>. Si el valor <code>value</code> proporcionat és un valor <code>number</code> dins de l'interval de moneda, la part decimal del valor <code>value</code> s'arrodoneix a 4 dígits decimals i es retorna. Si el valor <code>value</code> és d'un altre tipus, primer es convertirà a un valor <code>number</code>  mitjançant <code>Number.FromText</code>. L'interval vàlid per a la moneda és de <code>-922,337,203,685,477.5808</code> a <code>922,337,203,685,477.5807</code>. Consulteu <code>Number.Round</code> per obtenir els modes d'arrodoniment disponibles. El valor per defecte és <code>RoundingMode.ToEven</code>. També es pot proporcionar un valor <code>culture</code> (per exemple, "en-US").


## Examples

### Example #1 
Obté el valor de &lt;code&gt;moneda&lt;/code&gt; de &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt;.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
Obteniu el valor de &lt;code&gt;currency&lt;/code&gt; de &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; amb &lt;code&gt;RoundingMode.Down&lt;/code&gt;.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
