---
title: Single.From
---

# Single.From


## Description

Vytvoří z dané hodnoty hodnotu Single.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Details

Vrátí hodnotu Single <code>number</code> z dané hodnoty <code>value</code>. Pokud je daná hodnota <code>value</code> <code>null</code>, příkaz <code>Single.From</code> vrátí <code>null</code>. Pokud je daná hodnota <code>value</code> <code>number</code> v rozsahu Single, vrátí se <code>value</code>, jinak se vrátí chyba. Pokud má daná hodnota <code>value</code> jakýkoli jiný typ, bude nejprve pomocí <code>Number.FromText</code> převedena na typ <code>number</code>. Volitelně je možné zadat i <code>culture</code> (např. en-US).


## Examples

### Example #1 
Načte hodnotu Single hodnoty &lt;code&gt;number&lt;/code&gt; &lt;code&gt;&#34;1,5&#34;&lt;/code&gt;.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
