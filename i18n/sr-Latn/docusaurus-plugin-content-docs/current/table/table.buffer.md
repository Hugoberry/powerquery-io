---
title: Table.Buffer
---

# Table.Buffer


Baferuje tabelu u memoriju, pri čemu je izoluje od spoljašnjih promena tokom procene.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Remarks

Baferuje tabelu u memoriju, pri čemu je izoluje od spoljašnjih promena tokom procene. Baferovanje je plitko. Nameće evaluaciju bilo koje skalarne vrednosti ćelija, ali ostavlja ne-skalarne vrednosti (zapise, liste, tabele i slično) nepromenjene.

-   `table`: Tabela za bafer u memoriji.
-   `options`: (opcionalno) Mogu se koristiti sledeće vrednosti zapisa opcija:
    -   `BufferMode`: Režim baferovanja koji opisuje tip baferovanja koje treba izvršiti. Ova opcija može biti `BufferMode.Eager` ili `BufferMode.Delayed`.

Korišćenje ove funkcije može, ali i ne mora, ubrzati izvršavanje upita. U nekim slučajevima, to može da učini da upiti rade sporije zbog dodatog troškova čitanja svih podataka i čuvanja u memoriji, kao i činjenice da baferovanje sprečava nizvodno preklapanje. Ako podaci ne moraju da budu baferovani, ali želite da sprečite nizvodno preklapanje, umesto toga koristite `Table.StopFolding`.


## Examples

### Example #1
Učitajte sve redove SQL tabele u memoriju, tako da bilo koje nizvodne operacije više ne mogu da postavljaju upite SQL serveru.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
