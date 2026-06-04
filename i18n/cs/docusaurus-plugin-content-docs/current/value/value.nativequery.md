---
title: Value.NativeQuery
---

# Value.NativeQuery


Vyhodnocuje dotaz proti cílové databázi.


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

Vyhodnotí `query` nad `target` pomocí parametrů zadaných v `parameters` a možností zadaných v `options`.

Výstup dotazu je definován pomocí `target`.

`target` poskytuje kontext pro operaci, kterou popisuje `query`.

`query` popisuje dotaz, který se má provést nad `target`. `query` se vyjadřuje způsobem, který je specifický pro `target` (třeba výrazem jazyka T-SQL).

Volitelná hodnota `parameters` může obsahovat buď seznam, nebo záznam – podle toho, jak je vhodné zadat hodnoty parametrů, které očekává `query`.

Volitelný záznam `options` by měl obsahovat možnosti, které ovlivňují chování spuštění `query` nad `target`. Tyto možnosti jsou specifické pro `target`.



## Category
Values
