---
title: Value.As
---

# Value.As


## Description

Grąžina reikšmę, jei ji yra suderinama su nurodytu tipu.


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Details

Grąžina vertę, jei ji suderinama su nurodytu tipu. Tai atitinka operatorių „as“ M, išskyrus tai, kad jis gali priimti identifikatoriaus tipo nuorodas, pvz., Number.Type.


## Examples

### Example #1 
Keisti skaičių į skaičių.
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
Bandoma pakeisti tekstinę reikšmę į skaičių.
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
