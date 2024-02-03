---
title: Comparer.Equals
---

# Comparer.Equals


## Description

Возвращает логическое значение, основанное на проверке равенства для двух заданных значений.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Details

Возвращает значение <code>logical</code> на основании проверки равенства двух заданных значений (<code>x</code> и <code>y</code>) с использованием предоставленного <code>comparer</code>.      <div>        <code>comparer</code> — это модуль <code>Comparer</code>, который используется для управления сравнением.        Функция сравнения принимает два аргумента и возвращает –1, 0 или 1, если первое значение соответственно меньше второго, равно ему или больше него.        Функции сравнения можно использовать для сравнений без учета регистра или с учетом языкового стандарта и региональных параметров.      </div>      <div>        В языке формул доступны следующие встроенные функции сравнения:      </div>      <ul>        <li><code>Comparer.Ordinal</code> — используется для точного сравнения по порядковому номеру</li>        <li><code>Comparer.OrdinalIgnoreCase</code> — используется для точного сравнения по порядковому номеру без учета регистра</li>        <li> <code>Comparer.FromCulture</code> — используется для сравнения с учетом языка и региональных параметров</li>      </ul>


## Examples

### Example #1 
Сравнение &#34;1&#34; и &#34;A&#34; с использованием языка &#34;en-US&#34; для определения того, равны ли значения.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
