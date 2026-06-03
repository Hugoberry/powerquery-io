---
title: Text.StartsWith
---

# Text.StartsWith


Указывает, начинается ли текст с указанного значения.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Возвращает значение true, если текстовое значение `text` начинается с текстового значения `substring`.

-   `text`: значение типа `text`, которое нужно найти.
-   `substring`: значение типа `text` подстроки, которую нужно искать в строке `text`.
-   `comparer`: *(необязательно)* `Comparer`, используется для управления сравнением. Например, `Comparer.OrdinalIgnoreCase` можно использовать для выполнения поиска без учета регистра.

`comparer` представляет собой средство сравнения (`Comparer`), используемое для управления сравнением. Средства сравнения можно использовать для проведения сравнений без учета регистра или с учетом языка и региональных параметров.

В языке формул доступны следующие встроенные средства сравнения:

-   `Comparer.Ordinal`: используется для выполнения точного порядкового сравнения.
-   `Comparer.OrdinalIgnoreCase`: используется для выполнения точного порядкового сравнения без учета регистра.
-   `Comparer.OrdinalIgnoreCase`: используется для выполнения порядкового сравнения с учетом языка и региональных параметров.


## Examples

### Example #1
Проверить, начинается ли текст "Hello, World" с "hello".
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2
Проверить, начинается ли текст "Hello, World" с "Hello".
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```


### Example #3
Без учета регистра проверьте, начинается ли текст "Hello, World" с текста "hello".
```powerquery
Text.StartsWith("Hello, World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
