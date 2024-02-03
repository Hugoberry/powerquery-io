---
title: Currency.From
---

# Currency.From


## Description

Az adott értékből képzett pénznemértéket ad vissza.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Egy <code>currency</code> értéket ad vissza a megadott <code>value</code> értékből. Ha a megadott <code>value</code> <code>null</code>, a <code>Time.From</code> függvény <code>null</code> értéket ad vissza. Ha az adott <code>value</code> a pénznem tartományán belüli <code>number</code> érték, a <code>value</code> tört részét a rendszer 4 tizedesjegyig kerekíti és adja vissza. Ha <code>value</code> bármilyen más típusba tartozik, előbb a <code>Number.FromText</code> függvénnyel alakítja át <code>number</code> típusú értékre. A pénznem érvényes tartománya: <code>-922,337,203,685,477.5808</code> – <code>922,337,203,685,477.5807</code>. Az elérhető kerekítési módokkal kapcsolatban lásd: <code>Number.Round</code>. Az alapértelmezett érték: <code>RoundingMode.ToEven</code>. Egy nem kötelező <code>culture</code> is megadható (például, „en-US”).


## Examples

### Example #1 
Az &lt;code&gt;1,23455&lt;/code&gt;-ös érték &lt;code&gt;currency&lt;/code&gt; értékének lekérése.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
Szerezze be az &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; értékű &lt;code&gt;currency&lt;/code&gt; értéket a &lt;code&gt;RoundingMode.Down&lt;/code&gt; kód használatával.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
