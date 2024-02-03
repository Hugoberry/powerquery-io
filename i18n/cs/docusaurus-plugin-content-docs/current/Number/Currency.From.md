---
title: Currency.From
---

# Currency.From


## Description

Z dané hodnoty vrátí hodnotu měny.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Z předané hodnoty <code>value</code> vrátí hodnotu <code>currency</code>. Pokud má předaná hodnota <code>value</code> hodnotu <code>null</code>, příkaz <code>Currency.From</code> vrátí <code>null</code>. Pokud je předaná hodnota <code>value</code> typu <code>number</code> v rozsahu měny, vrátí se hodnota <code>value</code> zaokrouhlená na čtyři desetinná místa. Pokud je předaná hodnota <code>value</code> jakéhokoli jiného typu, bude nejprve pomocí <code>Number.FromText</code> převedena na typ <code>number</code>. Platný rozsah měny je <code>-922,337,203,685,477.5808</code> až <code>922,337,203,685,477.5807</code>. Informace o dostupných režimech zaokrouhlení najdete u příkazu <code>Number.Round</code>. Výchozí je <code>RoundingMode.ToEven</code>. Volitelně je možné zadat i <code>culture</code> (např. en-US).


## Examples

### Example #1 
Získá hodnotu &lt;code&gt;currency&lt;/code&gt; z hodnoty &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt;.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
Získá hodnotu &lt;code&gt;currency&lt;/code&gt; z hodnoty &lt;code&gt;1,23455&lt;/code&gt; pomocí funkce &lt;code&gt;RoundingMode.Down&lt;/code&gt;.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
