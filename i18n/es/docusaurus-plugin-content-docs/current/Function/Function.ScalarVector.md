---
title: Function.ScalarVector
---

# Function.ScalarVector


## Description

Crea una función escalar sobre una función de vector y procesa varias invocaciones por lotes.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Details

Devuelve una función escalar de tipo <code>scalarFunctionType</code> que invoca <code>vectorFunction</code> con una sola fila de argumentos y devuelve su salida única. Además, cuando la función escalar se aplica repetidamente para cada fila de una tabla de entradas, como en Table.AddColumn, <code>vectorFunction</code> se aplicará una vez para todas las entradas en su lugar.<br />Se pasará una tabla a <code>vectorFunction</code>; las columnas de esta tabla tendrán el mismo nombre y la misma posición que los parámetros de <code>scalarFunctionType</code>. Cada fila de esta tabla contiene los argumentos de una llamada de la función escalar; las columnas se corresponden con los parámetros de <code>scalarFunctionType</code>.<br /><code>vectorFunction</code> debe devolver una lista con la misma longitud que la tabla de entradas. El elemento de cada posición de esta tabla debe equivaler a evaluar la función escalar en la fila de entrada de la misma posición.<br />Se espera que la tabla de entradas esté secuenciada, por lo que también se espera que <code>vectorFunction</code> secuencie los resultados a medida que recibe las entradas, así como que solo procese un fragmento de entradas al mismo tiempo. Específicamente, <code>vectorFunction</code> no debe enumerar su tabla de entradas más de una vez.<br />



## Category
Function
