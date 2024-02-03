---
title: Function.ScalarVector
---

# Function.ScalarVector


## Description

Papildus vektora funkcijai izveido skalāru funkciju, apvienojot vairākas izsaukšanas.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Details

Atgriež skalāru funkciju ar tipu <code>scalarFunctionType</code>, kas izsauc <code>vectorFunction</code> ar vienu argumentu rindu un atgriež tā vienkāršo izvadi. Turklāt, kad skalārā funkcija tiek atkārtoti lietota katrai ievades tabulas rindai, piemēram, Table.AddColumn, tā vietā vektrora funkcija <code>vectorFunction</code> visām ievadēm tiek lietota vienreiz.<br /><code>vectorFunction</code> tiks nodots uz tabulu, kuras kolonnu nosaukums un pozīcija atbilst <code>scalarFunctionType</code> parametriem. Katrā šīs tabulas rindā ir argumenti vienam izsaukumam uz skalāro funkciju, un kolonnas atbilst <code>scalarFunctionType</code> parametriem.<br /><code>vectorFunction</code> ir jāatgriež tāda paša garuma saraksts kā ievades tabulai, kuras vienumam katrā pozīcijā ir nepieciešams tāds pats rezultāts kā skalārās fukcijas vērtējumam tās pašas pozīcijas ievades rindā.<br />Ievades tabulu ir paredzēts iestraumēt, tādēļ tiek gaidīts, ka <code>vectorFunction</code> savu izvadi straumē, ienākot ievadei, vienlaikus strādājot tikai ar vienu ievades porciju. Konkrētāk — <code>vectorFunction</code> nedrīkst uzskaitīt savu ievades tabulu vairākas reizes.<br />



## Category
Function
