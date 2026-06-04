---
title: Text.PositionOf
---

# Text.PositionOf


Повертає першу позицію значення (-1 — якщо не знайдено).


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

Повертає позицію, яку має вказаний екземпляр текстового значення "`substring`", знайденого в рядку "`text`". За допомогою додаткового параметра `occurrence` можна задати, яку позицію екземпляра слід повернути (значення за замовчуванням – перша). Якщо значення "`substring`" не знайдено, повертається -1.

`comparer` – це функція типу `Comparer` для контролю над порівнянням. Такі функції дають змогу порівнювати дані без урахування регістра або з огляду на культуру й локалізацію.

Мова формул передбачає наведені нижче вбудовані засоби порівняння.

-   `Comparer.Ordinal` – слугує для точного порядкового порівняння.
-   `Comparer.OrdinalIgnoreCase` – виконує точне порядкове порівняння без урахування регістра.
-   `Comparer.FromCulture` – виконує порівняння з огляду на культуру.


## Examples

### Example #1
Отримати позицію першого входження "World" у тексті "Hello, World! Hello, World!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2
Отримати позицію останнього екземпляра "World" у тексті "Hello, World! Hello, World!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
