---
title: Binary.ViewFunction
---

# Binary.ViewFunction


## Description

Crea unha función que pode interceptar un controlador definido nunha visualización (mediante Binary.View).


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Details

Crea unha función de visualización baseada en <code>function</code> que se pode controlar nunha visualización creada por <code>Binary.View</code>.<br />O controlador <code>OnInvoke</code> de <code>Binary.View</code> pode empregarse para definir un controlador para a función de visualización.<br />Do mesmo modo que cos controladores para operacións integradas, se non se especifica ningún controlador <code>OnInvoke</code> ou se este non controla a función de visualización, ou se se se produce un erro no controlador, aplícase <code>function</code> sobre a visualización.<br />Consulta a documentación publicada para ler una descrición máis completa de <code>Binary.View</code> e as funcións de visualización personalizadas.<br />



## Category
Binary
