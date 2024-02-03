---
title: Value.Is
---

# Value.Is


## Description

Мәннің нақты бір түрмен үйлесімді екенін анықтайды.


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Details

Мәннің берілген түрмен үйлесімді екенін анықтайды. Ол M ішіндегі "is" операторына сәйкес келеді, бірақ ол сан түрі сияқты идентификатор түріндегі анықтамалықты қабылдай алады.


## Examples

### Example #1 
Санның түр санымен үйлесімді екенін анықтаудың екі түрін салыстырады.
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
