---
title: Value.FromText
---

# Value.FromText


## Description

Створює чітко типізоване значення з текстового представлення.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Details

Розшифровує значення з текстового представлення <code>text</code> і розглядає його як значення відповідного типу.    <code>Value.FromText</code> набуває текстового значення й повертає число, логічне значення, Null-значення, значення дати й часу, значення тривалості або текстове значення. Пусте текстове значення розглядається як Null-значення.    Крім того, можна вказати необов’язковий параметр <code>culture</code> (наприклад, "uk-UA").



## Category
Text.Conversions from and to text
