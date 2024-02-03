---
title: Table.ViewFunction
---

# Table.ViewFunction


## Description

Crea unha función que pode interceptar un controlador definido nunha visualización (mediante Table.View).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Details

Crea unha función de visualización baseada en <code>function</code> que se pode controlar nunha visualización creada por <code>Table.View</code>.<br />O controlador <code>OnInvoke</code> de <code>Table.View</code> pode empregarse para definir un controlador para a función de visualización.<br />Do mesmo modo que cos controladores para operacións integradas, se non se especifica ningún controlador <code>OnInvoke</code> ou se este non controla a función de visualización, ou se se se produce un erro no controlador, aplícase <code>function</code> sobre a visualización.<br />Consulta a documentación publicada para ler una descrición máis completa de <code>Table.View</code> e as funcións de visualización personalizadas.<br />



## Category
Table.Table construction
