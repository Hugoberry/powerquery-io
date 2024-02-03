---
title: Text.EndsWith
---

# Text.EndsWith


## Description

Визначає, чи закінчується текст в указаному значенні.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Визначає, чи закінчується вказаний текст "<code>text</code>" указаним значенням "<code>substring</code>". Регістр враховується.      <div>        <code>comparer</code> – це функція типу <code>Comparer</code> для контролю над порівнянням. За допомогою таких функцій можна порівнювати дані без урахування регістра або з огляду на культуру й локалізацію.      </div>      <div>        Мова формул передбачає наведені нижче вбудовані засоби порівняння.      </div><ul>        <li><code>Comparer.Ordinal</code> – слугує для точного порядкового порівняння.</li>        <li><code>Comparer.OrdinalIgnoreCase</code> – виконує точне порядкове порівняння без урахування регістра.</li>        <li> <code>Comparer.FromCulture</code> – виконує точне порівняння з огляду на культуру.</li>      </ul>


## Examples

### Example #1 
Перевірити, чи закінчується текст &#34;Hello, World&#34; значенням &#34;world&#34;.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2 
Перевірити, чи закінчується текст &#34;Hello, World&#34; значенням &#34;World&#34;.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
