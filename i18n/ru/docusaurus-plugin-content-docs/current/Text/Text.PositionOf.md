---
title: Text.PositionOf
---

# Text.PositionOf


## Description

Возвращает первую позицию значения (-1, если не найдено).


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

Возвращает позицию указанного вхождения текстового значения <code>substring</code>, найденного в <code>text</code>.    Для указания позиции возвращаемого вхождения может использоваться необязательный параметр <code>occurrence</code> (по умолчанию — первое вхождение).    Возвращает –1, если не удается найти <code>substring</code>.      <div>        <code>comparer</code> — это <code>Comparer</code>, который используется для управления сравнением. Функции сравнения можно использовать для сравнений, не учитывающих регистр или учитывающих языковой стандарт и региональные параметры.      </div>      <div>        В языке формул доступны следующие встроенные функции сравнения:      </div>      <ul>        <li><code>Comparer.Ordinal</code> — используется для точного сравнения по порядковому номеру</li>        <li><code>Comparer.OrdinalIgnoreCase</code> — используется для точного сравнения по порядковому номеру без учета регистра</li>        <li> <code>Comparer.FromCulture</code> — используется для сравнения с учетом языка и региональных параметров</li>      </ul>


## Examples

### Example #1 
Возвращает позицию первого вхождения &#34;World&#34; в тексте &#34;Hello, World! Hello, World!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2 
Получить позицию последнего вхождения &#34;World&#34; в &#34;Hello, World! Hello, World!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
