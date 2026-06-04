---
title: Text.PositionOfAny
---

# Text.PositionOfAny


Visszaadja az első pozíciót a felsorolt karakterek szöveges értékében (ha nincs találat, a -1 értéket adja vissza).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Remarks

A(z) `characters` lista bármely karakterének első pozícióját adja vissza, amely a következőben található: `text`. Egy nem kötelező `occurrence` paraméterrel adható meg, hogy melyik előfordulási pozíciót adja vissza.


## Examples

### Example #1
Megkeresi a „W” vagy a „H” karakter első pozícióját a „Hello, World!” szövegben.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2
Megkeresi a „W“ vagy a „H“ összes pozícióját a „Hello, World!“ szövegben.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
