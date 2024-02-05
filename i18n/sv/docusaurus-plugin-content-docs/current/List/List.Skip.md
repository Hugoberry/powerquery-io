---
title: List.Skip
---

# List.Skip


## Description

Returnerar en lista som hoppar över angivet antal element i början av listan.


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Returnerar en lista som hoppar över det första elementet i listan <code>list</code>. Om <code>list</code> är en tom lista returneras en tom lista.Den här funktionen använder en valfri parameter, <code>countOrCondition</code>, för att ge stöd för att hoppa över flera värden som du ser nedan. <ul> <li>Om ett tal anges hoppas så många objekt över. </li> <li>Om ett villkor anges börjar listan som returneras med det första elementet i <code>list</code> som uppfyller villkoret. Om ett objekt inte uppfyller villkoret utvärderas inga fler objekt. </li> <li>Om den här parametern är null används standardbeteendet. </li> </ul>


## Examples

### Example #1 
Skapa en lista från \{1, 2, 3, 4, 5} utan de första 3 talen.
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
Skapa en lista från \{5, 4, 2, 6, 1} som börjar med ett tal som är mindre än 3.
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection
