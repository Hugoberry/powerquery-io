---
title: Text.PositionOfAny
---

# Text.PositionOfAny


Повертає першу позицію будь-якого з перелічених символів у текстовому значенні (-1 — якщо не знайдено).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Remarks

Повертає першу позицію будь-якого символу зі списку `characters`, який зустрічається в `text`. Можна вказати додатковий параметр `occurrence` для зазначення позиції входження, яку слід повернути.


## Examples

### Example #1
Знайдіть першу позицію "W" або "H" у тексті "Hello, World!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2
Знайдіть усі позиції "W" або "H" у тексті "Hello, World!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
