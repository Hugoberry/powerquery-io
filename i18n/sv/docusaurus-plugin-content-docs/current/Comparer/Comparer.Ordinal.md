---
title: Comparer.Ordinal
---

# Comparer.Ordinal


Returnerar en jämförelsefunktion som använder ordningstalsregler för att jämföra värden.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

Returnerar en jämförelsefunktion som använder ordningstalsregler för att jämföra de angivna värdena <code>x</code> and <code>y</code>.<br />        <br />        En jämförelsefunktion accepterar två argument och returnerar -1, 0 eller 1 baserat på om det första värdet är mindre än, lika med,  eller större än den andra.    


## Examples

### Example #1 
Jämför med ordningstalsregler om &#34;encyclopædia&#34; och &#34;encyclopaedia&#34; är ekvivalenta. Observera att dessa är ekvivalenta vid användning av &lt;code&gt;Comparer.FromCulture(&#34;en-US&#34;)&lt;/code&gt;. 
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
