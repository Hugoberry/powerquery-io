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

Возвращает первую позицию любого символа из списка `characters`, обнаруженного в `text`. Для указания возвращаемой позиции вхождения может использоваться необязательный параметр `occurrence`.


## Examples

### Example #1
Найти первую позицию "W" или "H" в тексте "Hello, World!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2
Найти все позиции "W" или "H" в тексте "Hello, World!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
