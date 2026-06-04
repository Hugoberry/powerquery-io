---
title: Text.EndsWith
---

# Text.EndsWith


Визначає, чи закінчується текст в указаному значенні.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Визначає, чи закінчується вказаний текст "`text`" указаним значенням "`substring`". Регістр враховується.

`comparer` – це функція типу `Comparer` для контролю над порівнянням. За допомогою таких функцій можна порівнювати дані без урахування регістра або з огляду на культуру й локалізацію.

Мова формул передбачає наведені нижче вбудовані засоби порівняння.

-   `Comparer.Ordinal` – слугує для точного порядкового порівняння.
-   `Comparer.OrdinalIgnoreCase` – виконує точне порядкове порівняння без урахування регістра.
-   `Comparer.FromCulture` – виконує точне порівняння з огляду на культуру.


## Examples

### Example #1
Перевірити, чи закінчується текст "Hello, World" значенням "world".
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2
Перевірити, чи закінчується текст "Hello, World" значенням "World".
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
