---
title: Text.PositionOf
---

# Text.PositionOf


Возвращает первую позицию значения (-1, если не найдено).


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Remarks

Возвращает позицию указанного вхождения текстового значения `substring`, найденного в `text`. Для указания позиции возвращаемого вхождения может использоваться необязательный параметр `occurrence` (по умолчанию — первое вхождение). Возвращает –1, если не удается найти `substring`.

`comparer` — это `Comparer`, который используется для управления сравнением. Функции сравнения можно использовать для сравнений, не учитывающих регистр или учитывающих языковой стандарт и региональные параметры.

В языке формул доступны следующие встроенные функции сравнения:

-   `Comparer.Ordinal` — используется для точного сравнения по порядковому номеру
-   `Comparer.OrdinalIgnoreCase` — используется для точного сравнения по порядковому номеру без учета регистра
-   `Comparer.FromCulture` — используется для сравнения с учетом языка и региональных параметров


## Examples

### Example #1
Возвращает позицию первого вхождения "World" в тексте "Hello, World! Hello, World!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2
Получить позицию последнего вхождения "World" в "Hello, World! Hello, World!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
