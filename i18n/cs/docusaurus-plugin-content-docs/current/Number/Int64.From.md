---
title: Int64.From
---

# Int64.From


## Description

Vytvoří 64bitové celé číslo z dané hodnoty.


## Syntax

```powerquery
Int64.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Vrátí 64bitovou celočíselnou hodnotu <code>number</code> z dané hodnoty <code>value</code>. Pokud má daná hodnota <code>value</code> hodnotu <code>null</code>, příkaz <code>Int64.From</code> vrátí <code>null</code>. Pokud je daná hodnota <code>value</code> číslo <code>number</code> v rozsahu 64bitových celých čísel bez zlomkové části, vrátí se hodnota <code>value</code>. Pokud má zlomkovou část, číslo se zaokrouhlí podle zadaného režimu zaokrouhlování. Výchozí režim zaokrouhlování je <code>RoundingMode.ToEven</code>. Pokud má hodnota <code>value</code> jakýkoli jiný typ, bude nejprve pomocí <code>Number.FromText</code> převedena na typ <code>number</code>. Další režimy zaokrouhlování viz <code>Number.Round</code>. Volitelně je možné zadat i <code>culture</code> (např. „en-US“).


## Examples

### Example #1 
Získá 64bitovou celočíselnou hodnotu &lt;code&gt;number&lt;/code&gt; hodnoty &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Získá 64bitovou celočíselnou hodnotu &lt;code&gt;number&lt;/code&gt; hodnoty &lt;code&gt;4,5&lt;/code&gt; pomocí funkce &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Int64.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
