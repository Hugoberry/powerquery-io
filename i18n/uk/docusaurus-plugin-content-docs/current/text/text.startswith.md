---
title: Text.StartsWith
---

# Text.StartsWith


Указує, чи починається текст з указаного значення.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Повертає значення true, якщо текстове значення `text` починається з текстового значення `substring`.

-   `text`: текстове значення (`text`), яке потрібно шукати.
-   `substring`: текстове значення (`text`), яке потрібно шукати в `text`.
-   `comparer`: *(необовʼязково)* засіб порівняння (`Comparer`), що використовується для керування порівнянням. Наприклад, `Comparer.OrdinalIgnoreCase` можна використовувати для порівняння значень без урахування регістра.

`comparer` – це засіб порівняння (`Comparer`), що використовується для керування порівнянням. Засоби порівняння можна використовувати для порівняння без урахування регістра або з урахуванням культури та локалізації.

Мова формул передбачає такі вбудовані засоби порівняння:

-   `Comparer.Ordinal`: використовується для точного порівняння порядкових чисел.
-   `Comparer.OrdinalIgnoreCase`: використовується для точного порівняння порядкових чисел без урахування регістра.
-   `Comparer.FromCulture`: використовується для порівняння з урахуванням культури.


## Examples

### Example #1
Перевірити, чи текст "Hello, World" починається з тексту "hello".
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2
Перевірити, чи текст "Hello, World" починається з тексту "Hello".
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```


### Example #3
Перевірити, чи текст "Hello, World" починається з тексту "hello", не враховуючи регістр.
```powerquery
Text.StartsWith("Hello, World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
