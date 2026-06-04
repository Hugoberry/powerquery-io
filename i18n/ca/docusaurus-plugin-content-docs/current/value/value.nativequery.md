---
title: Value.NativeQuery
---

# Value.NativeQuery


Avalua una consulta comparant-la amb una destinació.


## Syntax

```powerquery
Value.NativeQuery(
    target as any,
    query as text,
    optional parameters as any,
    optional options as record
) as any
```


## Remarks

Avalua `query` comparant-ho amb `target` mitjançant els paràmetres especificats a `parameters` i les opcions especificades a `options`.

`target` defineix la sortida de la consulta.

`target` proporciona el context per a l’operació que `query` descriu.

`query` descriu la consulta perquè s’executi a `target`. `query` s’expressa d’una manera específica de `target` (per exemple, una instrucció del T-SQL).

El valor opcional `parameters` pot contenir una llista o un registre segons convingui per proporcionar els valors de paràmetres que `query` espera.

El registre opcional `options` pot contenir opcions que afecten el comportament d’avaluació de `query` a `target`. Aquestes opcions són específiques de `target`.



## Category
Values
