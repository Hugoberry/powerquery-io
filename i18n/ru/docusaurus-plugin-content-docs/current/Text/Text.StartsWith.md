---
title: Text.StartsWith
---

# Text.StartsWith


## Description

Указывает, начинается ли текст с указанного значения.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Возвращает значение True, если текстовое значение <code>text</code> начинается с текстового значения <code>substring</code>.      <ul>        <li><code>text</code>: <i></i> Значение <code>text</code>, которое следует найти</li>        <li><code>substring</code>: <i></i> Значение <code>text</code>, представляющее подстроку для поиска в <code>substring</code></li>        <li><code>comparer</code>: <i>[необязательно]</i> <code>Comparer</code>, используемый для управления сравнением. Например, <code>Comparer.OrdinalIgnoreCase</code> может использоваться для поиска без учета регистра</li>      </ul>      <div>        <code>comparer</code> — это модуль <code>Comparer</code>, который используется для управления сравнением. Функции сравнения можно использовать для сравнений, не учитывающих регистр или учитывающих языковой стандарт и региональные параметры.      </div>      <div>        В языке формул доступны следующие встроенные функции сравнения:      </div>      <ul>        <li><code>Comparer.Ordinal</code> — используется для точного сравнения по порядковому номеру</li>        <li><code>Comparer.OrdinalIgnoreCase</code> — используется для точного сравнения по порядковому номеру без учета регистра</li>        <li> <code>Comparer.FromCulture</code> — используется для сравнения с учетом языка и региональных параметров</li>      </ul>


## Examples

### Example #1 
Проверить, начинается ли текст &#34;Hello, World&#34; с &#34;hello&#34;.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2 
Проверить, начинается ли текст &#34;Hello, World&#34; с &#34;Hello&#34;.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
