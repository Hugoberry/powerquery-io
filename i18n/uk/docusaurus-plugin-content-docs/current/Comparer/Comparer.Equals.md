---
title: Comparer.Equals
---

# Comparer.Equals


## Description

Повертає логічне значення на основі перевірки рівності двох заданих значень.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Details

Перевіряє рівність двох заданих значень, "<code>x</code>" і "<code>y</code>", за допомогою вказаної функції <code>comparer</code>, і повертає значення типу <code>logical</code>.      <div>        <code>comparer</code> – це функція типу <code>Comparer</code> для контролю над порівнянням.         Такі функції приймають два аргументи та повертають значення -1,0 або 1, залежно від того, чи перше значення менше, дорівнює або є більшим за друге.        Засоби порівняння використовуються для надання порівнянь без урахування регістра або з урахуванням культури та локалізації.      </div>      <div>        Мова формул передбачає такі вбудовані засоби порівняння:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: слугує для точного порядкового порівняння</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: виконує точне порядкове порівняння без урахування регістра.</li>        <li> <code>Comparer.FromCulture</code>: виконує порівняння з огляду на культуру.</li>      </ul>


## Examples

### Example #1 
Порівняти &#34;1&#34; та &#34;A&#34; за допомогою локалізації &#34;en-US&#34;, щоб визначити, чи значення однакові.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
