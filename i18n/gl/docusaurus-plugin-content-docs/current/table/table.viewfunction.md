---
title: Table.ViewFunction
---

# Table.ViewFunction


Crea unha función que pode interceptar un controlador definido nunha visualización (mediante Table.View).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Remarks

Crea unha función de visualización baseada en `function` que se pode controlar nunha visualización creada por `Table.View`.

O controlador `OnInvoke` de `Table.View` pode empregarse para definir un controlador para a función de visualización.

Do mesmo modo que cos controladores para operacións integradas, se non se especifica ningún controlador `OnInvoke` ou se este non controla a función de visualización, ou se se se produce un erro no controlador, aplícase `function` sobre a visualización.

Consulta a documentación publicada para ler una descrición máis completa de `Table.View` e as funcións de visualización personalizadas.



## Category
Table.Table construction
