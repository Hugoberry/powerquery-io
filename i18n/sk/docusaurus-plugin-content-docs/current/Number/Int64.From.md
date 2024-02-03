---
title: Int64.From
---

# Int64.From


## Description

Vytvorí 64-bitové celé číslo z danej hodnoty.


## Syntax

```powerquery
Int64.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Vráti hodnotu <code>number</code> vo formáte 64-bitového celého čísla zo zadanej hodnoty <code>value</code>. Ak je zadaná hodnota <code>value</code> <code>null</code>, príkaz <code>Int64.From</code> vráti hodnotu <code>null</code>. Ak je zadaná hodnota <code>value</code> typu <code>number</code> v rozsahu 64-bitového celého čísla bez zlomkovej časti, vráti sa <code>value</code>. Ak má zlomkovú časť, číslo sa zaokrúhli podľa zadaného spôsobu zaokrúhlenia. Predvolený spôsob zaokrúhlenia je <code>RoundingMode.ToEven</code>. Ak je <code>value</code> akéhokoľvek iného typu, najskôr sa skonvertuje na hodnotu <code>number</code> pomocou príkazu <code>Number.FromText</code>. Dostupné spôsoby zaokrúhlenia nájdete v časti <code>Number.Round</code>. Voliteľne sa tiež môže zadať <code>culture</code> (napríklad en-US).


## Examples

### Example #1 
Získať hodnotu typu &lt;code&gt;number&lt;/code&gt; 64-bitového celého čísla &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Získajte hodnotu &lt;code&gt;number&lt;/code&gt; vo formáte 64-bitového celého čísla z čísla &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; na základe spôsobu &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Int64.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
