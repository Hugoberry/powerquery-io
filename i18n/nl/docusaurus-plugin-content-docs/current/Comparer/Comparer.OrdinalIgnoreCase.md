---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


Retourneert een comparer-functie waarbij geen onderscheid wordt gemaakt tussen hoofdletters en kleine letters en waarbij ordinale regels worden gebruikt om waarden te vergelijken.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Remarks

Hiermee wordt een niet-hoofdlettergevoelige vergelijkingsfunctie geretourneerd die rangtelwoordregels gebruikt om de opgegeven waarden <code>x</code> en <code>y</code> te vergelijken.<br />        <br />        Een vergelijkingsfunctie accepteert twee argumenten en retourneert -1, 0 of 1 op basis van of de eerste waarde kleiner dan, gelijk aan of groter is dan de tweede waarde.    


## Examples

### Example #1 
Abc met abc vergelijken met ordinale regels waarbij geen onderscheid worden gemaakt tussen hoofdletters en kleine letters. Abc is minder dan abc met &lt;code&gt;Comparer.Ordinal&lt;/code&gt;. 
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
