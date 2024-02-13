---
title: Value.Is
---

# Value.Is


Определяет, совместимо ли значение с указанным типом.


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Remarks

Определяет, совместимо ли значение с указанным типом. Это эквивалентно оператору "is" в M, за исключением того, что оно может принимать ссылки на тип идентификатора, такие как Number.Type.


## Examples

### Example #1 
Сравните два способа определения совместимости числа с числом типа.
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
