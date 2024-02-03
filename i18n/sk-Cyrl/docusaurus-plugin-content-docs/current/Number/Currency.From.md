---
title: Currency.From
---

# Currency.From


## Description

Vráti zo zadanej hodnoty hodnotu meny.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Vráti zo zadanej hodnoty <code>value</code> hodnotu <code>currency</code>. Ak je zadaná hodnota <code>value</code> <code>null</code>, príkaz <code>Currency.From</code> vráti hodnotu <code>null</code>. Ak je zadaná hodnota <code>value</code> <code>number</code> v rozsahu meny, zlomková časť hodnoty <code>value</code> sa zaokrúhli na 4 desatinné miesta a vráti sa. Ak je <code>value</code> akéhokoľvek iného typu, najskôr sa skonvertuje na hodnotu <code>number</code> pomocou príkazu <code>Number.FromText</code>. Platný rozsah meny je <code>-922,337,203,685,477.5808</code> až <code>922,337,203,685,477.5807</code>. Dostupné spôsoby zaokrúhlenia nájdete v časti <code>Number.Round</code>. Predvolený spôsob je <code>RoundingMode.ToEven</code>. Voliteľne sa tiež môže zadať <code>culture</code> (napríklad en-US).


## Examples

### Example #1 
Získanie hodnoty &lt;code&gt;currency&lt;/code&gt; pre &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt;.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
Získajte hodnotu &lt;code&gt;currency&lt;/code&gt; pre &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; na základe spôsobu &lt;code&gt;RoundingMode.Down&lt;/code&gt;.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
