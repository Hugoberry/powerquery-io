---
title: Value.As
---

# Value.As


## Description

Повертає значення, якщо воно сумісне з указаним типом.


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Details

Повертає значення, якщо воно сумісне з указаним типом. Ця функція еквівалентна до оператора "as" у M, за винятком того, що може приймати посилання на тип ідентифікатора, такі як Number.Type.


## Examples

### Example #1 
Перетворює число на число.
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
Спроба перетворити текстове значення на число.
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
