---
title: Text.PositionOfAny
---

# Text.PositionOfAny


## Description

Повертає першу позицію будь-якого з перелічених символів у текстовому значенні (-1 — якщо не знайдено).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Details

Повертає першу позицію будь-якого символу зі списку <code>characters</code>, який зустрічається в <code>text</code>.    Можна вказати додатковий параметр <code>occurrence</code> для зазначення позиції входження, яку слід повернути.


## Examples

### Example #1 
Знайдіть першу позицію &#34;W&#34; або &#34;H&#34; у тексті &#34;Hello, World!&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2 
Знайдіть усі позиції &#34;W&#34; або &#34;H&#34; у тексті &#34;Hello, World!&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
