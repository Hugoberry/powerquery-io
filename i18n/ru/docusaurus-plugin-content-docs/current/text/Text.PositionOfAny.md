---
title: Text.PositionOfAny
---

# Text.PositionOfAny


Возвращает первую позицию любого из перечисленных символов в текстовом значении (-1, если не найдено).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Remarks

Возвращает первую позицию любого символа из списка <code>characters</code>, обнаруженного в <code>text</code>.    Для указания возвращаемой позиции вхождения может использоваться необязательный параметр <code>occurrence</code>.


## Examples

### Example #1 
Найти первую позицию &#34;W&#34; или &#34;H&#34; в тексте &#34;Hello, World!&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2 
Найти все позиции &#34;W&#34; или &#34;H&#34; в тексте &#34;Hello, World!&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
