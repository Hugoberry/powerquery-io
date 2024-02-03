---
title: Text.PositionOfAny
---

# Text.PositionOfAny


## Description

Visszaadja az első pozíciót a felsorolt karakterek szöveges értékében (ha nincs találat, a -1 értéket adja vissza).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Details

A(z) <code>characters</code> lista bármely karakterének első pozícióját adja vissza, amely a következőben található: <code>text</code>.
    Egy nem kötelező <code>occurrence</code> paraméterrel adható meg, hogy melyik előfordulási pozíciót adja vissza.


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
