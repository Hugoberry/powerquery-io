---
title: Int8.From
---

# Int8.From


## Description

Kreira potpisani 8-bitni ceo broj iz date vrednosti.


## Syntax

```powerquery
Int8.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Vraća 8-bitnu celobrojnu vrednost <code>number</code> iz datog <code>value</code>. Ako je dati <code>value</code> <code>null</code>, <code>Int8.From</code> vraća <code>null</code>. Ako je dati <code>value</code> <code>number</code> u opsegu 8-bitnog celog broja bez decimalnog dela, vraća se <code>value</code>. Ako sadrži decimalni deo, broj se zaokružuje pomoću navedenog režima zaokruživanja. Podrazumevani režim zaokruživanja je <code>RoundingMode.ToEven</code>. Ako je <code>value</code> nekog drugog tipa, biće konvertovan u <code>number</code>, koristeći <code>Number. FromText</code>. Pogledajte <code>Number.Round</code> za dostupne režime zaokruživanja. Opcionalno se može navesti i <code>culture</code> (na primer, „en-US“).


## Examples

### Example #1 
Dobijte potpisanu 8-bitnu celobrojnu &lt;code&gt;number&lt;/code&gt; vrednost od &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Int8.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Dobijte potpisanu 8-bitnu celobrojnu &lt;code&gt;number&lt;/code&gt; vrednost od &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; koristeći &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Int8.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
