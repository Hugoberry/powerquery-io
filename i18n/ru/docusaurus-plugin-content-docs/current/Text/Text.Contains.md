---
title: Text.Contains
---

# Text.Contains


## Description

Определяет, содержит ли текст подстроку.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Определяет, содержит ли <code>text</code> значение <code>substring</code>. Возвращает значение true, если значение найдено. Эта функция не поддерживает подстановочные знаки и регулярные выражения.      <br />      <br />      Необязательный аргумент <code>comparer</code> можно использовать для сравнений, не учитывающих регистр или учитывающих языковой стандарт и региональные параметры.      В языке формул доступны следующие встроенные функции сравнения:      <ul>        <li><code>Comparer.Ordinal</code> — используется для сравнения по порядковому номеру с учетом регистра</li>        <li><code>Comparer.OrdinalIgnoreCase</code> — используется для сравнения по порядковому номеру без учета регистра</li>        <li> <code>Comparer.FromCulture</code> — используется для сравнения с учетом языка и региональных параметров</li>      </ul>


## Examples

### Example #1 
Найти, содержит ли текст &#34;Hello World&#34; подстроку &#34;Hello&#34;.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
Найти, содержит ли текст &#34;Hello World&#34; подстроку &#34;hello&#34;.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
Узнайте, содержится ли слово &#34;hello&#34; в тексте &#34;Hello World&#34; с помощью функции сравнения, не учитывающей регистр.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
