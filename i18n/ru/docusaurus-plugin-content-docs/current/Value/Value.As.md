---
title: Value.As
---

# Value.As


## Description

Возвращает значение, если оно совместимо с указанным типом.


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Details

Возвращает значение, если оно совместимо с указанным типом. Это эквивалентно оператору "as" в M, за исключением того, что оно может принимать ссылки на тип идентификатора, такие как Number.Type.


## Examples

### Example #1 
Преобразование числа в число.
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
Попытка преобразовать текстовое значение в число.
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
