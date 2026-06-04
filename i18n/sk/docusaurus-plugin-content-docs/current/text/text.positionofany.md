---
title: Text.PositionOfAny
---

# Text.PositionOfAny


Vráti prvú pozíciu v textovej hodnote ľubovoľného uvedeného znaku (–1, ak sa nenájde).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Remarks

Vráti prvú pozíciu ľubovoľného znaku v zozname `characters` nájdenú v texte `text`. Na zadanie pozície výskytu, ktorá sa má vrátiť, možno použiť voliteľný parameter `occurrence`.


## Examples

### Example #1
Vyhľadá prvú pozíciu znaku W alebo H v texte „Hello, World!“.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2
Vyhľadá všetky pozície znaku W alebo H v texte „Hello, World!“.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
