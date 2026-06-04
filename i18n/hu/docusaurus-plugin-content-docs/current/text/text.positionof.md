---
title: Text.PositionOf
---

# Text.PositionOf


Visszaadja az érték első pozícióját (ha nincs találat, a -1 értéket adja vissza).


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

Visszaadja a(z) `substring` szöveges érték `text` szövegbeli meghatározott előfordulásának pozícióját. A nem kötelező `occurrence` paraméterrel adható meg, hogy melyik előfordulási pozíciót adja vissza (alapértelmezés szerint az első előfordulásét). Ha a(z) `substring` nem található, -1 értéket ad vissza.

A(z) `comparer` egy `Comparer`, amely az összehasonlítás szabályozására szolgál. Az összehasonlítók a kis- és nagybetűket meg nem különböztető, illetve kulturális környezetet és területi beállítást figyelembe vevő összehasonlítások megadására használhatók.

A következő beépített összehasonlítók érhetők el a képletnyelvben:

-   `Comparer.Ordinal`: Pontos sorrendi összehasonlítás végrehajtására szolgál.
-   `Comparer.OrdinalIgnoreCase`: Kis- és nagybetűk megkülönböztetése nélküli, pontos sorrendi összehasonlítás végrehajtására szolgál.
-   `Comparer.FromCulture`: Kulturális környezetet figyelembe vevő összehasonlítás végrehajtására szolgál.


## Examples

### Example #1
Visszaadja a „World” szöveg első előfordulásának pozícióját a következő szövegben: „Hello, World! Hello, World!”.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2
Visszaadja a „World” szöveg utolsó előfordulásának pozícióját a következő szövegben: „Hello, World! Hello, World!”.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
