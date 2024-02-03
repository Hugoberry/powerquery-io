---
title: Value.NativeQuery
---

# Value.NativeQuery


## Description

Procenjuje upit u odnosu na cilj.


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

Procenjuje <code>query</code> u odnosu na <code>target</code> pomoću parametara navedenih u <code>parameters</code> i opcija navedenih u <code>options</code>.<br />Izlaz upita definiše <code>target</code>.<br /><code>target</code> obezbeđuje kontekst za operaciju koju opisuje <code>query</code>.<br /><code>query</code> opisuje upit koji treba izvršiti u odnosu na <code>target</code>. <code>query</code> se izražava na način specifičan za <code>target</code> (na primer, T-SQL izjava).<br />Opcionalna <code>parameters</code> vrednost po potrebi može da sadrži listu ili zapis kako bi se navele vrednosti parametara koje očekuje <code>query</code>.<br />Opcionalni <code>options</code> zapis može da sadrži opcije koje utiču na ponašanje procenjivanja <code>query</code> u odnosu na <code>target</code>. Ove opcije su specifične za <code>target</code>.<br />



## Category
Values
