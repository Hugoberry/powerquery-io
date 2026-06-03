---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

Возвращает часть `text` перед указанным `delimiter`. Необязательный числовой `index` указывает, какое вхождение `delimiter` следует рассматривать. Необязательный список `index` указывает, какое вхождение `delimiter` следует рассматривать, а также откуда вести индексацию — с начала или с конца входных данных.


## Examples

### Example #1
Получить часть строки "111-222-333" перед (первым) дефисом.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2
Получить часть строки "111-222-333" перед вторым дефисом.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3
Получить часть строки "111-222-333" перед вторым дефисом с конца.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
