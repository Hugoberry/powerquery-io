---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


## Description

Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Details

Возвращает часть <code>text</code> перед указанным <code>delimiter</code>.    Необязательный числовой <code>index</code> указывает, какое вхождение <code>delimiter</code> следует рассматривать.    Необязательный список <code>index</code> указывает, какое вхождение <code>delimiter</code> следует рассматривать, а также откуда вести индексацию — с начала или с конца входных данных.


## Examples

### Example #1 
Получить часть строки &#34;111-222-333&#34; перед (первым) дефисом.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2 
Получить часть строки &#34;111-222-333&#34; перед вторым дефисом.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3 
Получить часть строки &#34;111-222-333&#34; перед вторым дефисом с конца.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
