---
title: Text.PositionOf
---

# Text.PositionOf


## Description

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


## Details

Visszaadja a(z) <code>substring</code> szöveges érték <code>text</code> szövegbeli meghatározott előfordulásának pozícióját.   A nem kötelező <code>occurrence</code> paraméterrel adható meg, hogy melyik előfordulási pozíciót adja vissza (alapértelmezés szerint az első előfordulásét).    Ha a(z) <code>substring</code> nem található, -1 értéket ad vissza.    <div>        A(z) <code>comparer</code> egy <code>Comparer</code>, amely az összehasonlítás szabályozására szolgál. Az összehasonlítók a kis- és nagybetűket meg nem különböztető, illetve kulturális környezetet és területi beállítást figyelembe vevő összehasonlítások megadására használhatók.      </div>      <div>        A következő beépített összehasonlítók érhetők el a képletnyelvben:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Pontos sorrendi összehasonlítás végrehajtására szolgál.</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Kis- és nagybetűk megkülönböztetése nélküli, pontos sorrendi összehasonlítás végrehajtására szolgál.</li>        <li> <code>Comparer.FromCulture</code>: Kulturális környezetet figyelembe vevő összehasonlítás végrehajtására szolgál.</li>      </ul>


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
