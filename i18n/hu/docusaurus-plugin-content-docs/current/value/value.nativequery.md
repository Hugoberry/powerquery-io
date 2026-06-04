---
title: Value.NativeQuery
---

# Value.NativeQuery


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


## Remarks

Kiértékeli a(z) `query` elemet a(z) `target` elemen a(z) `parameters` megadott paramétereivel és a(z) `options` megadott beállításaival.

A lekérdezés kimenetét a(z) `target` határozza meg.

A(z) `target` elem környezetet nyújt a(z) `query` által leírt művelethez.

A(z) `query` elem leírja a(z) `target` elemen futtatandó lekérdezést. A(z) `query` elem a(z) `target` elemre érvényes módon fejezhető ki (például T-SQL utasítás).

Az opcionális `parameters` érték a(z) `query` által várt paraméterértékek megadásához megfelelő listát vagy rekordot tartalmazhat.

Az opcionális `options` rekord a(z) `query` `target` elemen végzett kiértékelési viselkedését befolyásoló beállításokat tartalmazhat. Ezek a beállítások a(z) `target` elemre vonatkoznak.



## Category
Values
