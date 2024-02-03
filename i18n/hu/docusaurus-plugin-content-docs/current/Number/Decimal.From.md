---
title: Decimal.From
---

# Decimal.From


## Description

Decimális értéket hoz létre a megadott értékből.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Details

Egy tizedes tört <code>number</code> értéket ad vissza a megadott <code>value</code> értékből. Ha a megadott <code>value</code> <code>null</code>, a <code>Decimal.From</code> függvény <code>null</code> értéket ad vissza. Ha a megadott <code>value</code> egy <code>number</code> a tizedes törtek tartományában, <code>value</code> értéket ad vissza, más esetben hibát jelez. Ha <code>value</code> bármilyen más típusba tartozik,előbb a <code>Number.FromText</code> függvénnyel alakítja át <code>number</code> típusú értékre. Egy nem kötelező <code>culture</code> is megadható (például „en-US”).


## Examples

### Example #1 
A &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; decimális &lt;code&gt;number&lt;/code&gt; típusú értékének előállítása.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
