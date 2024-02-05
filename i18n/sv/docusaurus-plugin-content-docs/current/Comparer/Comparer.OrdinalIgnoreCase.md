---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


## Description

Returnerar en skiftlägeskänslig jämförelsefunktion som använder ordningstalsregler för att jämföra värden.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Details

Returnerar en skiftlägesokänslig jämförelsefunktion som använder ordningstalsregler för att jämföra de angivna värdena  <code>x</code> and <code>y</code>.<br />        <br />        En jämförelsefunktion accepterar två argument och returnerar -1, 0 eller 1 baserat på om det första värdet är mindre än, lika med,  eller större än den andra.    


## Examples

### Example #1 
Använder skiftlägeskänsliga ordningstalsregler, jämför &#34;Abc&#34; med &#34;abc&#34;. Observera att &#34;Abc&#34; är mindre än &#34;abc&#34; vid användning av &lt;code&gt;Comparer.Ordinal&lt;/code&gt;. 
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
