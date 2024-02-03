---
title: Decimal.From
---

# Decimal.From


## Description

Vytvoří z dané hodnoty hodnotu Decimal.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Details

Vrátí hodnotu Decimal <code>number</code> z dané hodnoty <code>value</code>. Pokud je daná hodnota <code>value</code> <code>null</code>, příkaz <code>Decimal.From</code> vrátí <code>null</code>. Pokud je daná hodnota <code>value</code> <code>number</code> v rozsahu Decimal, vrátí se <code>value</code>, jinak se vrátí chyba. Pokud má daná hodnota <code>value</code> jakýkoli jiný typ, bude nejprve pomocí <code>Number.FromText</code> převedena na typ <code>number</code>. Volitelně je možné zadat i <code>culture</code> (např. en-US).


## Examples

### Example #1 
Načte hodnotu Decimal &lt;code&gt;number&lt;/code&gt; &lt;code&gt;&#34;4,5&#34;&lt;/code&gt;.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
