---
title: Value.As
---

# Value.As


## Description

Мән нақты бір түрмен үйлесімді болса, оны қайтарады.


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Details

Мән нақты бір түрмен үйлесімді болса, оны қайтарады. Ол M ішіндегі "as" операторына сәйкес келеді, бірақ ол сан түрі сияқты идентификатор түріндегі анықтамалықты қабылдай алады.


## Examples

### Example #1 
Санды санға түрлендіру.
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
Мәтін мәнін санға түрлендіру әрекеті.
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
