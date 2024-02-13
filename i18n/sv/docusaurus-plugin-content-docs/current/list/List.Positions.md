---
title: List.Positions
---

# List.Positions


Returnerar en lista med förskjutningar för aktuella indata.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Returnerar en lista med förskjutningar för indatalistan <code>list</code>.    När du använder List.Transform för att ändra en lista, kan listan med positioner användas för att ge transformeringen åtkomst till positionen.


## Examples

### Example #1 
Hitta förskjutningarna för värden i listan \{1, 2, 3, 4, null, 5}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
