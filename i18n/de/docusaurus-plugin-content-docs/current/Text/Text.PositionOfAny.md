---
title: Text.PositionOfAny
---

# Text.PositionOfAny


## Description

Gibt die erste Position aufgeführter Zeichen im Textwert zurück (oder &#34;-1&#34;, falls keine gefunden wird).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Details

Gibt die erste Position eines beliebigen Zeichens in der Liste <code>characters</code> zurück, das sich in <code>text</code> befindet.    Ein optionaler Parameter <code>occurrence</code> kann verwendet werden, um anzugeben, welche Vorkommensposition zurückgegeben werden soll.


## Examples

### Example #1 
Suchen Sie die erste Positionen von „W“ und „H“ im Text „Hallo, Welt!“.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2 
Suchen Sie alle Positionen von „W“ und „H“ im Text „Hallo, Welt!“.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
