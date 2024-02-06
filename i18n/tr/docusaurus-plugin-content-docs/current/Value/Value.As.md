---
title: Value.As
---

# Value.As


Değer belirtilen türle uyumluysa değeri döndürür.


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Remarks

Değer belirtilen türle uyumluysa değeri döndürür. Bu, Number.Type gibi tanımlayıcı türü başvurularını kabul edebilmesi dışında M'deki "as" operatörüne eşdeğerdir.


## Examples

### Example #1 
Sayıyı sayıya dönüştürün.
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
Metin değerini sayıya dönüştürmeyi deneyin.
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
