---
title: List.Positions
---

# List.Positions


## Description

Tiek atgriezts saraksts, kurā ir ietvertas ievades vērtību nobīdes.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Details

Atgriež sarakstu, kurā ir ietvertas ievades saraksta <code>list</code> vērtību nobīdes.    Ja maināt sarakstu, izmantojot funkciju List.Transform, pozīciju sarakstu varat izmantot, lai pārveidošanas funkcijai nodrošinātu piekļuvi konkrētajai pozīcijai.


## Examples

### Example #1 
Iegūstiet vērtību nobīdes sarakstā \{1, 2, 3, 4, null, 5}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
