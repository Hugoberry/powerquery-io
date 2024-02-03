---
title: Value.NativeQuery
---

# Value.NativeQuery


## Description

Kiértékeli a célon futtatott lekérdezést.


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

Kiértékeli a(z) <code>query</code> elemet a(z) <code>target</code> elemen a(z) <code>parameters</code> megadott paramétereivel és a(z) <code>options</code> megadott beállításaival.<br />A lekérdezés kimenetét a(z) <code>target</code> határozza meg.<br />A(z) <code>target</code> elem környezetet nyújt a(z) <code>query</code> által leírt művelethez.<br />A(z) <code>query</code> elem leírja a(z) <code>target</code> elemen futtatandó lekérdezést. A(z) <code>query</code> elem a(z) <code>target</code> elemre érvényes módon fejezhető ki (például T-SQL utasítás).<br />Az opcionális <code>parameters</code> érték a(z) <code>query</code> által várt paraméterértékek megadásához megfelelő listát vagy rekordot tartalmazhat.<br />Az opcionális <code>options</code> rekord a(z) <code>query</code> <code>target</code> elemen végzett kiértékelési viselkedését befolyásoló beállításokat tartalmazhat. Ezek a beállítások a(z) <code>target</code> elemre vonatkoznak.<br />



## Category
Values
