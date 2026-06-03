---
title: Table.ViewFunction
---

# Table.ViewFunction


Crea una función que un controlador definido en una visualización (mediante Table.View) puede interceptar.


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Remarks

Crea una función de vista basada en `function` que se puede controlar en una vista creada por `Table.View`.

El controlador `OnInvoke` de `Table.View` se puede utilizar para definir un controlador para la función de vista.

Al igual que con los controladores para operaciones integradas, si no se especifica ningún controlador `OnInvoke`, o si no maneja la función de vista, o si el controlador genera un error `function` se aplica sobre la vista.

Consulte la documentación del conector personalizado de Power Query publicada para obtener una descripción más completa de `Table.View` y funciones de vista personalizadas.



## Category
Table.Table construction
