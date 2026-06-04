---
title: Table.Buffer
---

# Table.Buffer


Almacena no búfer unha táboa na memoria, illándoa de modificacións externas durante a avaliación.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Remarks

Almacena unha táboa na memoria intermedia, illándoa de cambios externos durante a avaliación. O almacenamento en búfer é superficial. Forza a avaliación de calquera valor de cela escalar, pero deixa os valores non escalares (rexistros, listas, táboas, etc.) como están.

-   `table` : A táboa para almacenar na memoria intermedia.
-   `options` : (Opcional) Pódense usar as seguintes opcións para rexistrar valores:
    -   `BufferMode`: O modo de búfer que describe o tipo de almacenamento en búfer que se vai realizar. Esta opción pode ser `BufferMode.Eager` ou `BufferMode.Delayed`.

Empregar esta función pode ou non facer que as túas consultas se executen máis rápido. Nalgúns casos, pode facer que as túas consultas se executen máis lentamente debido ao engadido o custo de ler todos os datos e almacenalos na memoria, así como o feito de que o almacenamento en búfer impide o pregamento posterior. Se os datos non precisan ser almacenado en búfer pero só queres evitar o pregamento augas abaixo, usa `Table.StopFolding` no seu lugar.


## Examples

### Example #1
Carga todas as filas dunha táboa SQL na memoria, para que as operacións posteriores xa non poidan consultar o servidor SQL.
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
