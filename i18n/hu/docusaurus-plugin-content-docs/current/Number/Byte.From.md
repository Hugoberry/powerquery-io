---
title: Byte.From
---

# Byte.From


## Description

A megadott érték átalakítása 8 bites egész számmá.


## Syntax

```powerquery
Byte.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Egy 8 bites egész <code>number</code> értéket ad vissza a megadott <code>value</code> értékből. Ha a megadott <code>value</code> <code>null</code>, a <code>Byte.From</code> függvény visszaadott értéke <code>null</code>. Ha a megadott <code>value</code> <code>number</code> a 8 bites egész számok tartományában, törtrész nélkül, <code>value</code> értéket ad vissza. Ha rendelkezik törtrésszel, a szám a megadott kerekítési mód szerint lesz kerekítve. Az alapértelmezett kerekítési mód a <code>RoundingMode.ToEven</code>. Ha <code>value</code> bármilyen más típusba tartozik, előbb a <code>Number.FromText</code> függvénnyel alakítja át <code>number</code> típusú értékre. Az elérhető kerekítési módokkal kapcsolatban lásd: <code>Number.Round</code>. Egy nem kötelező <code>culture</code> is megadható (például „en-US”).


## Examples

### Example #1 
A &lt;code&gt;&#34;4&#34;&lt;/code&gt; érték átalakítása &lt;code&gt;number&lt;/code&gt; típusú 8 bites egész számmá.
```powerquery
Byte.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
A &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; érték átalakítása &lt;code&gt;number&lt;/code&gt; típusú 8 bites egész számmá a &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt; használatával.
```powerquery
Byte.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
