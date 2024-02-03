---
title: Int8.From
---

# Int8.From


## Description

Crea un enter de 8 bits amb signe a partir del valor determinat.


## Syntax

```powerquery
Int8.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Retorna un valor <code>number</code> enter de 8 bits amb signe a partir del valor <code>value</code> proporcionat. Si el valor <code>value</code> proporcionat és <code>null</code>, <code>Int8.From</code> retorna <code>null</code>. Si el valor <code>value</code> proporcionat és <code>number</code> dins de l'interval d'enters de 8 bits amb signe sense cap part decimal, es retorna el valor <code>value</code>. Si té una part decimal, el número s'arrodoneix segons el mode d'arrodoniment especificat. El mode d'arrodoniment per defecte és <code>RoundingMode.ToEven</code>. Si el valor <code>value</code> és d’un altre tipus, primer es convertirà a un valor <code>number</code> mitjançant <code>Number.FromText</code>. Consulteu <code>Number.Round</code> per obtenir els modes d'arrodoniment disponibles. També es pot proporcionar un valor <code>culture</code> (per exemple, "en-US").


## Examples

### Example #1 
Obté el valor &lt;code&gt;number&lt;/code&gt; de 8 bits amb signe de &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Int8.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Obté el valor &lt;code&gt;number&lt;/code&gt; enter de 8 bits amb signe de &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; amb &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Int8.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
