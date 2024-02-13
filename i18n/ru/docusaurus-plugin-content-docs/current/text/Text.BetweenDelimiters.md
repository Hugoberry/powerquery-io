---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


Text.BetweenDelimiters


## Syntax

```powerquery
Text.BetweenDelimiters(
    text as text,
    startDelimiter as text,
    endDelimiter as text,
    optional startIndex as any,
    optional endIndex as any
) as any
```


## Remarks

Возвращает часть <code>text</code> между указанными <code>startDelimiter</code> и <code>endDelimiter</code>.    Необязательный числовой <code>startIndex</code> указывает, какое вхождение <code>startDelimiter</code> следует рассматривать.    Необязательный список <code>startIndex</code> указывает, какое вхождение <code>startDelimiter</code> следует рассматривать, а также откуда вести индексацию — с начала или с конца входных данных.    Для <code>endIndex</code> все аналогично с тем исключением, что индексация ведется относительно <code>startIndex</code>.


## Examples

### Example #1 
Получить часть строки &#34;111 (222) 333 (444)&#34; между (первой) открывающей скобкой и (первой) закрывающей скобкой после нее.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2 
Получить часть строки &#34;111 (222) 333 (444)&#34; между второй открывающей скобкой и первой закрывающей скобкой после нее.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3 
Получить часть строки &#34;111 (222) 333 (444)&#34; между второй открывающей скобкой с конца и второй закрывающей скобкой после нее.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
