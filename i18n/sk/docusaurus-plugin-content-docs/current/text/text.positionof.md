---
title: Text.PositionOf
---

# Text.PositionOf


Vráti prvú pozíciu hodnoty (–1, ak sa nenájde).


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Remarks

Vráti pozíciu zadaného výskytu textovej hodnoty `substring` nájdenú v hodnote `text`. Na zadanie pozície výskytu, ktorá sa má vrátiť (predvolene prvý výskyt), možno použiť voliteľný parameter `occurrence`. Vráti -1, ak sa hodnota `substring` nenašla.\\

`comparer` je porovnávač `Comparer`\>, ktorá sa používa na kontrolu porovnania. Porovnávače možno použiť na uvedenie porovnaní bez rozlíšenia malých a veľkých písmen alebo porovnaní zohľadňujúcich kultúru a miestne nastavenie.

V jazyku vzorcov sú k dispozícii tieto vstavané porovnávače:

-   `Comparer.Ordinal`: používa sa na vykonanie presného ordinálneho porovnania
-   `Comparer.OrdinalIgnoreCase`: používa sa na vykonanie presného ordinálneho porovnania bez rozlíšenia malých a veľkých písmen
-   `Comparer.FromCulture`: používa sa na vykonanie porovnania zohľadňujúceho kultúru


## Examples

### Example #1
Získajte pozíciu prvého výskytu textu "World" v texte "Hello, World! Hello, World!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2
Získajte pozíciu posledného výskytu „World“ v „Hello, World! Hello, World!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
