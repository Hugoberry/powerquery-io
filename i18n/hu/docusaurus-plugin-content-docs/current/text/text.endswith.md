---
title: Text.EndsWith
---

# Text.EndsWith


Azt jelzi, hogy a szöveg a megadott értékkel végződik-e.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Azt jelzi, hogy a megadott szöveg (`text`) a megadott értékre (`substring`) végződik-e. A függvény megkülönbözteti a kis- és nagybetűket.

A(z) `comparer` egy `Comparer`, amely az összehasonlítás szabályozására szolgál. Az összehasonlítók a kis- és nagybetűket meg nem különböztető vagy kulturális környezetre és területi beállításra érzékeny összehasonlítások megadására használhatók.

A következő beépített összehasonlítók érhetőek el a képletnyelvben:

-   `Comparer.Ordinal`: Pontos sorrendi összehasonlítás végrehajtására szolgál.
-   `Comparer.OrdinalIgnoreCase`: Kis- és nagybetűket meg nem különböztető, pontos sorrendi összehasonlítás végrehajtására szolgál.
-   `Comparer.FromCulture`: Kulturális környezetre érzékeny összehasonlítás végrehajtására szolgál.


## Examples

### Example #1
Ellenőrzi, hogy a „Hello, World” karakterlánc a „world” karakterlánccal végződik-e.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2
Ellenőrzi, hogy a „Hello, World” karakterlánc a „World” karakterlánccal végződik-e.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
