---
title: List.RemoveLastN
---

# List.RemoveLastN


## Description

Returnerar en lista som tar bort angivet antal element från slutet av listan.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Returnerar en lista som tar bort de sista <code>countOrCondition</code> elementen från slutet av listan <code>list</code>. Om <code>list</code> har färre än <code>countOrCondition</code> element returneras en tom lista. <ul> <li>Om ett tal anges tas upp till så många objekt bort. </li> <li>Om ett villkor anges slutar listan som returneras med det första nedersta elementet i <code>list</code> som uppfyller villkoret. Om ett objekt inte uppfyller villkoret utvärderas inga fler objekt. </li> <li>Om den här parametern är null tas endast ett objekt bort. </li> </ul>


## Examples

### Example #1 
Skapa en lista från \{1, 2, 3, 4, 5} utan de sista 3 talen.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Skapa en lista från \{5, 4, 2, 6, 4} som slutar med ett tal som är mindre än 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
