---
title: Duration.ToText
---

# Duration.ToText


Повертає текст форми "d.h:m:s".


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Повертає текстове представлення заданого значення тривалості `duration` у формі "день.година:хвилина:секунда".

-   `duration`: значення `duration`, для якого повертається текстове представлення.
-   `format`: *(необов’язково)* застарілий параметр, що генеруватиме повідомлення про помилку, коли не має Null-значення.


## Examples

### Example #1
Перетворити `#duration(2, 5, 55, 20)` на текстове значення.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
