---
title: Int16.From
---

# Int16.From


## Description

Vytvoří z dané hodnoty 16bitové celé číslo.


## Syntax

```powerquery
Int16.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Vrátí 16bitovou celočíselnou hodnotu <code>number</code> z dané hodnoty <code>value</code>. Pokud má daná hodnota <code>value</code> hodnotu <code>null</code>, příkaz <code>Int16.From</code> vrátí <code>null</code>. Pokud je daná hodnota <code>value</code> číslo <code>number</code> v rozsahu 16bitových celých čísel bez zlomkové části, vrátí se hodnota <code>value</code>. Pokud má zlomkovou část, číslo se zaokrouhlí podle zadaného režimu zaokrouhlování. Výchozí režim zaokrouhlování je <code>RoundingMode.ToEven</code>. Pokud má hodnota <code>value</code> jakýkoli jiný typ, bude nejprve pomocí <code>Number.FromText</code> převedena na typ <code>number</code>. Další režimy zaokrouhlování viz <code>Number.Round</code>. Volitelně je možné zadat i <code>culture</code> (např. „en-US“).


## Examples

### Example #1 
Načte 16bitové celé číslo hodnoty &lt;code&gt;number&lt;/code&gt; &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Načte 16bitové celé číslo hodnoty &lt;code&gt;number&lt;/code&gt; &lt;code&gt;&#34;4,5&#34;&lt;/code&gt; s použitím &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Int16.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
