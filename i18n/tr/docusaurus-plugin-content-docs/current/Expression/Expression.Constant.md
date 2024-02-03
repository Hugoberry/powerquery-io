---
title: Expression.Constant
---

# Expression.Constant


## Description

Sabit bir değerin M kaynak kodu gösterimini döndürür.


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Details

Sabit bir değerin M kaynak kodu gösterimini döndürür.


## Examples

### Example #1 
Bir sayı değerinin M kaynak kodu gösterimini alır.
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2 
Bir tarih değerinin M kaynak kodu gösterimini alır.
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3 
Bir metin değerinin M kaynak kodu gösterimini alır.
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
