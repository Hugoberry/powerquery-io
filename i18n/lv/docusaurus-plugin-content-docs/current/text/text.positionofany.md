---
title: Text.PositionOfAny
---

# Text.PositionOfAny


Tiek atgriezta teksta vērtības vai jebkuras norādītās rakstzīmes pirmā pozīcija (-1, ja netiek atrasta).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Remarks

Atgriež jebkuras sarakstā `characters` norādītās rakstzīmes pirmo pozīciju, kas atrodama `text`. Var izmantot neobligātu parametru `occurrence`, lai norādītu atgriežamo gadījuma pozīciju.


## Examples

### Example #1
Atrodiet "W" vai "H" pirmo pozīciju tekstā "Hello, World!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2
Atrodiet visas "W" vai "H" pozīcijas tekstā "Hello, World!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
