---
title: Text.AfterDelimiter
---

# Text.AfterDelimiter


## Description

Text.AfterDelimiter


## Syntax

```powerquery
Text.AfterDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Details

Возвращает часть <code>text</code> после указанного <code>delimiter</code>.    Необязательный числовой <code>index</code> указывает, какое вхождение <code>delimiter</code> следует рассматривать.    Необязательный список <code>index</code> указывает, какое вхождение <code>delimiter</code> следует рассматривать, а также откуда вести индексацию — с начала или с конца входных данных.


## Examples

### Example #1 
Получить часть строки &#34;111-222-333&#34; после (первого) дефиса.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2 
Получить часть строки &#34;111-222-333&#34; после второго дефиса.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3 
Получить часть строки &#34;111-222-333&#34; после второго дефиса с конца.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
