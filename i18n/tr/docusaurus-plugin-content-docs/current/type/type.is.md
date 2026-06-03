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

Değer değerinin her zaman `type1` uyumlu olup olmadığını `type2`. Parametre `type2` temel (veya null atanabilir temel) bir tür değeri olmalıdır. Aksi halde, bu işlevin davranışı tanımlanmamıştır ve buna güvenilmaları gerekir.


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
