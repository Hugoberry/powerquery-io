---
title: Table.Buffer
---

# Table.Buffer


## Description

Almacena no búfer unha táboa na memoria, illándoa de modificacións externas durante a avaliación.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Details

Almacena no búfer da memoria unha táboa, illándoa dos cambios externos durante a avaliación.    O almacenamento en búfer é superficial. Forza a avaliación de calquera valor de cela de escalado, pero deixa os valores de non escalado (rexistros, listas, táboas, etc.) tal cal.    <br />    <br />    Teña en conta que usar esta función podería facer ou non que as consultas se executen máis rápido. Nalgúns casos, pode facer que as consultas se executen máis lentamente debido ao custo     engadido de ler todos os datos e almacenalas na memoria, así como o feito de que o almacenamento en búfer evita a delegación de descarga. Se non precisa que os datos se    almacenen no búfer e tan só quere evitar o pregamento cara a niveis inferiores, use <code>Table.StopFolding</code>.


## Examples

### Example #1 
Carga todas as filas dunha táboa SQL na memoria, polo que calquera operación de descarga non poderá consultar o servidor SQL.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(dbo_MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
