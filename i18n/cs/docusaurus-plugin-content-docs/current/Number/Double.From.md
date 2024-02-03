---
title: Double.From
---

# Double.From


## Description

Vytvoří z dané hodnoty hodnotu Double.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Details

Vrátí hodnotu Double <code>number</code> z dané hodnoty <code>value</code>. Pokud je daná hodnota <code>value</code> <code>null</code>, příkaz <code>Double.From</code> vrátí <code>null</code>. Pokud je daná hodnota <code>value</code> <code>number</code> v rozsahu Double, vrátí se <code>value</code>, jinak se vrátí chyba. Pokud má daná hodnota <code>value</code> jakýkoli jiný typ, bude nejprve pomocí <code>Number.FromText</code> převedena na typ <code>number</code>. Volitelně je možné zadat i <code>culture</code> (např. en-US).


## Examples

### Example #1 
Načte hodnotu Double &lt;code&gt;number&lt;/code&gt; &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
