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

Returnerar en jämförelsefunktion som använder `culture` och skiftlägeskänsligheten som anges av `ignoreCase` för att utföra jämförelser.  
  
En jämförelsefunktion accepterar två argument och returnerar -1, 0 eller 1 baserat på om det första värdet är mindre än, lika med eller större än det andra.  
  
Standardvärdet för `ignoreCase` är falskt. `culture` ska vara en av de nationella inställningar som stöds av .NET Framework (t.ex. en-US).


## Examples

### Example #1
Jämför "a" och "A" med den nationella inställningen "sv-SE" för att fastställa om värdena är lika.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2
Jämför "a" och "A" med den nationella inställningen "sv-SE" ignorerande skiftläget för att fastställa om värdena är lika.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
