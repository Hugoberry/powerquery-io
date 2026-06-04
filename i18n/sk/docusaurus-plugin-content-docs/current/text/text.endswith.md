---
title: Text.EndsWith
---

# Text.EndsWith


Udáva, či sa text končí na zadanú hodnotu.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Udáva, či sa daný text `text` končí na zadanú hodnotu `substring`. Označenie rozlišuje malé a veľké písmená.

`comparer` je funkcia `Comparer`, ktorá sa používa na kontrolu porovnania. Porovnávače možno použiť na uvedenie porovnaní bez rozlíšenia malých a veľkých písmen alebo porovnaní zohľadňujúcich kultúru a miestne nastavenie.

V jazyku vzorcov sú k dispozícii tieto vstavané porovnávače:

-   `Comparer.Ordinal`: používa sa na vykonanie presného ordinálneho porovnania
-   `Comparer.OrdinalIgnoreCase`: používa sa na vykonanie presného ordinálneho porovnania bez rozlíšenia malých a veľkých písmen
-   `Comparer.FromCulture`: používa sa na vykonanie porovnania zohľadňujúceho kultúru


## Examples

### Example #1
Skontrolujte, či text "Hello, World" končí textom "world".
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2
Skontrolujte, či text "Hello, World" končí textom "World".
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
