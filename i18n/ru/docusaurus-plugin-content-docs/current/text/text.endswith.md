---
title: Text.EndsWith
---

# Text.EndsWith


Указывает, завершается ли текст указанным значением.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Указывает, завершается ли этот текст `text` указанным значением `substring`. Проверка выполняется с учетом регистра.

`comparer` — это модуль `Comparer`, который используется для управления сравнением. Функции сравнения можно использовать для сравнений, не учитывающих регистр или учитывающих языковой стандарт и региональные параметры.

В языке формул доступны следующие встроенные функции сравнения:

-   `Comparer.Ordinal`\> — используется для точного сравнения по порядковому номеру
-   `Comparer.OrdinalIgnoreCase` — используется для точного сравнения по порядковому номеру без учета регистра
-   `Comparer.FromCulture` — используется для сравнения с учетом языка и региональных параметров


## Examples

### Example #1
Проверить, оканчивается ли "Hello, World" на "world".
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2
Проверить, оканчивается ли "Hello, World" на "World".
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
