---
title: Value.NativeQuery
---

# Value.NativeQuery


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


## Remarks

Procenjuje `query` u odnosu na `target` pomoću parametara navedenih u `parameters` i opcija navedenih u `options`.

Izlaz upita definiše `target`.

`target` obezbeđuje kontekst za operaciju koju opisuje `query`.

`query` opisuje upit koji treba izvršiti u odnosu na `target`. `query` se izražava na način specifičan za `target` (na primer, T-SQL izjava).

Opcionalna `parameters` vrednost po potrebi može da sadrži listu ili zapis kako bi se navele vrednosti parametara koje očekuje `query`.

Opcionalni `options` zapis može da sadrži opcije koje utiču na ponašanje procenjivanja `query` u odnosu na `target`. Ove opcije su specifične za `target`.



## Category
Values
