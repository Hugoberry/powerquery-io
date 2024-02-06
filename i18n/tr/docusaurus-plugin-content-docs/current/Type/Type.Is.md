---
title: Type.Is
---

# Type.Is


İlk türün değerinin her zaman ikinci türle uyumlu olup olmadığını belirler.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

<code>type1</code> değerinin her zaman <code>type2</code> ile uyumlu olup olmayacağını belirler.


## Examples

### Example #1 
Sayı türündeki bir değerin her zaman herhangi bir değer olarak da değerlendirilip değerlendirilmeyeceğini belirler.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2 
Herhangi bir türdeki değerin her zaman sayı olarak da değerlendirilip değerlendirilmeyeceğini belirler.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
