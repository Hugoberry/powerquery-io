---
title: Text.StartsWith
---

# Text.StartsWith


Udáva, či sa text začína na zadanú hodnotu.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Vráti hodnotu True, ak textová hodnota `text` začína textovou hodnotou `substring`.

-   `text`: Hodnota `text`, ktorá sa má vyhľadávať.
-   `substring`: Hodnota `text`, ktorá je podreťazcom, ktorý sa má vyhľadávať v `text`.
-   `comparer`: *(Voliteľné)* Hodnota `Comparer` použitá na riadenie porovnania. Napríklad `Comparer.OrdinalIgnoreCase` možno použiť na vyhľadávanie bez rozlišovania malých a veľkých písmen.

`comparer` je `Porovnávač`, ktorý sa používa na riadenie porovnania. Porovnávače možno použiť na poskytovanie porovnaní bez rozlišovania malých a veľkých písmen alebo s ohľadom na jazykovú verziu a miestne nastavenie.

V jazyku vzorcov sú k dispozícii tieto vstavané porovnávače:

-   `Comparer.Ordinal`: Používa sa na vykonanie presného poradového porovnania.
-   `Comparer.OrdinalIgnoreCase`: Používa sa na vykonanie poradového porovnania bez rozlišovania malých a veľkých písmen.
-   `Comparer.FromCulture`: Používa sa na vykonanie porovnania s vedomím jazykovej verzie.


## Examples

### Example #1
Skontrolujte, či sa text "Hello, World" začína textom "hello".
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2
Skontrolujte, či sa text "Hello, World" začína textom "Hello".
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```


### Example #3
Ignorujú sa malé a veľké písmená. Skontrolujte, či sa text "Hello, World" začína textom "hello".
```powerquery
Text.StartsWith("Hello, World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
