---
title: Text.EndsWith
---

# Text.EndsWith


## Description

Указывает, завершается ли текст указанным значением.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Указывает, завершается ли этот текст <code>text</code> указанным значением <code>substring</code>. Проверка выполняется с учетом регистра.      <div>        <code>comparer</code> — это модуль <code>Comparer</code>, который используется для управления сравнением. Функции сравнения можно использовать для сравнений, не учитывающих регистр или учитывающих языковой стандарт и региональные параметры.      </div>      <div>        В языке формул доступны следующие встроенные функции сравнения:      </div>      <ul>        <li><code>Comparer.Ordinal</code>> — используется для точного сравнения по порядковому номеру</li>        <li><code>Comparer.OrdinalIgnoreCase</code> — используется для точного сравнения по порядковому номеру без учета регистра</li>        <li> <code>Comparer.FromCulture</code> — используется для сравнения с учетом языка и региональных параметров</li>      </ul>


## Examples

### Example #1 
Проверить, оканчивается ли &#34;Hello, World&#34; на &#34;world&#34;.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2 
Проверить, оканчивается ли &#34;Hello, World&#34; на &#34;World&#34;.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
