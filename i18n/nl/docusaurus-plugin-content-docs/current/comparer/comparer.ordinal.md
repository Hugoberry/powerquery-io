---
title: Comparer.Ordinal
---

# Comparer.Ordinal


Retourneert een vergelijkingsfunctie waarbij rangtelwoordregels worden gebruikt om waarden te vergelijken.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

Hiermee wordt een vergelijkingsfunctie geretourneerd die rangtelwoordregels gebruikt om de opgegeven waarden <code>x</code> en <code>y</code> te vergelijken.<br />      <br />       Een vergelijkingsfunctie accepteert twee argumenten en retourneert -1, 0 of 1 op basis van of de eerste waarde kleiner dan, gelijk aan of groter is dan de tweede.    


## Examples

### Example #1 
Vergelijk aan de hand van rangtelwoordregels of &#39;encyclopædia&#39; en &#39;encyclopaedia&#39; equivalent zijn. Houd er rekening mee dat deze equivalent zijn met &lt;code&gt;Comparer.FromCulture(&#34;en-US&#34;)&lt;/code&gt;. 
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
