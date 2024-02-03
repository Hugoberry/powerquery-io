---
title: Text.PositionOf
---

# Text.PositionOf


## Description

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


## Details

Повертає позицію, яку має вказаний екземпляр текстового значення "<code>substring</code>", знайденого в рядку "<code>text</code>".    За допомогою додаткового параметра <code>occurrence</code> можна задати, яку позицію екземпляра слід повернути (значення за замовчуванням – перша).    Якщо значення "<code>substring</code>" не знайдено, повертається -1.      <div>         <code>comparer</code> – це функція типу <code>Comparer</code> для контролю над порівнянням. Такі функції дають змогу порівнювати дані без урахування регістра або з огляду на культуру й локалізацію.      </div>      <div>        Мова формул передбачає наведені нижче вбудовані засоби порівняння.      </div>      <ul>        <li><code>Comparer.Ordinal</code> – слугує для точного порядкового порівняння.</li>        <li><code>Comparer.OrdinalIgnoreCase</code> – виконує точне порядкове порівняння без урахування регістра.</li>        <li> <code>Comparer.FromCulture</code> – виконує порівняння з огляду на культуру.</li>      </ul>


## Examples

### Example #1 
Отримати позицію першого входження &#34;World&#34; у тексті &#34;Hello, World! Hello, World!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2 
Отримати позицію останнього екземпляра елемента &#34;World&#34; у тексті &#34;Hello, World! Hello, World!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
