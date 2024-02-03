---
title: Value.NativeQuery
---

# Value.NativeQuery


## Description

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


## Details

Vyhodnotí <code>query</code> nad <code>target</code> pomocí parametrů zadaných v <code>parameters</code> a možností zadaných v <code>options</code>.<br />Výstup dotazu je definován pomocí <code>target</code>.<br /><code>target</code> poskytuje kontext pro operaci, kterou popisuje <code>query</code>.<br /><code>query</code> popisuje dotaz, který se má provést nad <code>target</code>. <code>query</code> se vyjadřuje způsobem, který je specifický pro <code>target</code> (třeba výrazem jazyka T-SQL).<br />Volitelná hodnota <code>parameters</code> může obsahovat buď seznam, nebo záznam – podle toho, jak je vhodné zadat hodnoty parametrů, které očekává <code>query</code>.<br />Volitelný záznam <code>options</code> by měl obsahovat možnosti, které ovlivňují chování spuštění <code>query</code> nad <code>target</code>. Tyto možnosti jsou specifické pro <code>target</code>.<br />



## Category
Values
