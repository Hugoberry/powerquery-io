---
title: Type.Is
---

# Type.Is


Determina si un valor del primer tipus sempre és compatible amb el segon tipus.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

Determina si un valor d'`type1` sempre és compatible amb `type2`. El `type2` ha de ser un valor primitiu (o primitiu nul) primitiu. En cas contrari, el comportament d'aquesta funció no està definit i no s'ha de basar.


## Examples

### Example #1
Determina si un valor de tipus nombre es pot tractar sempre com a tipus qualsevol.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2
Determina si un valor de qualsevol tipus es pot tractar sempre com a tipus nombre.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
