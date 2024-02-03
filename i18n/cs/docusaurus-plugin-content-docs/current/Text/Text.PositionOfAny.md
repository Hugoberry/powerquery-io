---
title: Text.PositionOfAny
---

# Text.PositionOfAny


## Description

Vrátí první pozici textové hodnoty všech uvedených znaků (-1, pokud není nalezena).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Details

Vrátí první pozici libovolného znaku v seznamu <code>characters</code> nalezeného v <code>text</code>.    Volitelný parametr <code>occurrence</code> lze použít k určení pozice výskytu, která se má vrátit.


## Examples

### Example #1 
Najděte první pozici „W“ nebo „H“ v textu „Hello, World!“.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2 
Najděte všechny pozice „W“ nebo „H“ v textu „Hello, World!“.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
