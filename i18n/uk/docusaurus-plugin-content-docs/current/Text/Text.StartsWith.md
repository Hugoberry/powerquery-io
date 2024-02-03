---
title: Text.StartsWith
---

# Text.StartsWith


## Description

Указує, чи починається текст з указаного значення.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Повертає значення true, якщо текстове значення "<code>text</code>" починається з текстового значення "<code>substring</code>".      <ul>        <li>"<code>text</code>" – <i></i> значення типу <code>text</code>, яке потрібно знайти.</li>        <li>"<code>substring</code>" – <i></i> значення типу <code>text</code>, підрядок, який потрібно знайти в рядку <code>substring</code>.</li>        <li><code>comparer</code> – <i>[необов’язкова]</i> функція типу <code>Comparer</code>, що слугує для контролю над порівнянням. Наприклад, <code>Comparer.OrdinalIgnoreCase</code> можна використовувати для пошуку без урахування регістра.</li>      </ul>      <div>         <code>comparer</code> – це функція <code>Comparer</code>, що дає змогу контролювати порівняння. За допомогою таких функцій можна виконувати порівняння без урахування регістра або з огляду на культуру й локалізацію.      </div>      <div>        Мова формул передбачає наведені нижче вбудовані засоби порівняння.      </div>      <ul>        <li><code>Comparer.Ordinal</code> – слугує для точного порядкового порівняння.</li>        <li><code>Comparer.OrdinalIgnoreCase</code> – виконує точне порядкове порівняння без урахування регістра.</li>        <li> <code>Comparer.FromCulture</code> – дає змогу порівнювати дані з огляду на культуру.</li>      </ul>


## Examples

### Example #1 
Перевірити, чи текст &#34;Hello, World&#34; починається з тексту &#34;hello&#34;.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2 
Перевірити, чи текст &#34;Hello, World&#34; починається з тексту &#34;Hello&#34;.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
