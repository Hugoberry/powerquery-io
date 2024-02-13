---
title: Comparer.FromCulture
---

# Comparer.FromCulture


Returnerar en jämförelsefunktion baserat på den angivna kulturen och skiftlägeskänsligheten.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Remarks

Returnerar en jämförelsefunktion som använder <code>culture</code> och skiftlägeskänsligheten som anges av <code>ignoreCase</code> för att utföra jämförelser.<br />      <br />      En jämförelsefunktion accepterar två argument och returnerar -1, 0 eller 1 baserat på om det första värdet är mindre än, lika med eller större än det andra.<br />      <br />      Standardvärdet för <code>ignoreCase</code> är falskt. <code>culture</code> ska vara en av de nationella inställningar som stöds av .NET Framework (t.ex. en-US).    


## Examples

### Example #1 
Jämför &#34;a&#34; och &#34;A&#34; med den nationella inställningen &#34;sv-SE&#34; för att fastställa om värdena är lika.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2 
Jämför &#34;a&#34; och &#34;A&#34; med den nationella inställningen &#34;sv-SE&#34; ignorerande skiftläget för att fastställa om värdena är lika.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
