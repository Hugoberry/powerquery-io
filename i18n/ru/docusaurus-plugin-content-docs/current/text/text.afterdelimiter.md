---
title: Text.AfterDelimiter
---

# Text.AfterDelimiter


Text.AfterDelimiter


## Syntax

```powerquery
Text.AfterDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

Возвращает часть `text` после указанного `delimiter`. Необязательный числовой `index` указывает, какое вхождение `delimiter` следует рассматривать. Необязательный список `index` указывает, какое вхождение `delimiter` следует рассматривать, а также откуда вести индексацию — с начала или с конца входных данных.


## Examples

### Example #1
Получить часть строки "111-222-333" после (первого) дефиса.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2
Получить часть строки "111-222-333" после второго дефиса.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3
Получить часть строки "111-222-333" после второго дефиса с конца.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
