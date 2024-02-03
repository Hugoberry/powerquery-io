---
title: Function.ScalarVector
---

# Function.ScalarVector


## Description

Crea unha función escalar sobre unha función de vector, procesando por lotes varias invocacións.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Details

Devolve unha función escalar de tipo <code>scalarFunctionType</code> que invoca <code>vectorFunction</code> cunha única fila de argumentos e devolve unha única saída. Ademais, cando a función escalar se aplica de forma repetida a cada fila dunha táboa de entradas, como en Table.AddColumn, no seu lugar aplicarase <code>vectorFunction</code> unha vez para todas as entradas.<br /><code>vectorFunction</code> pasarase a unha táboa cuxas columnas coincidan no nome e na posición cos parámetros de <code>scalarFunctionType</code>. Cada fila desta táboa contén os argumentos para unha chamada á función escalar, coas columnas correspondentes aos parámetros de <code>scalarFunctionType</code>.<br /><code>vectorFunction</code> debe devolver unha lista da mesma lonxitude que a táboa de entrada, cuxo elemento en cada posición debe ser o mesmo resultado que avaliar a función na fila da a mesma posición de entrada escalar.<br />Espérase que a táboa de entrada se transmita, polo que se espera que <code>vectorFunction</code> transmita a súa saída na mesma medida na que se producen as entradas, traballando só cun fragmento de entrada en cada momento. En concreto, <code>vectorFunction</code> non debe enumerar a súa táboa de entrada máis dunha vez.<br />



## Category
Function
