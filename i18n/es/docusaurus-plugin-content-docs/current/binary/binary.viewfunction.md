---
title: Binary.ViewFunction
---

# Binary.ViewFunction


Crea una función que un controlador definido en una visualización (mediante Binary.View) puede interceptar.


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Remarks

Crea una función de vista basada en `function` que se puede controlar en una vista creada por `Binary.View`.

El controlador `OnInvoke` de `Binary.View` se puede utilizar para definir un controlador para la función de vista.

Al igual que con los controladores para operaciones integradas, si no se especifica ningún controlador `OnInvoke`, o si no maneja la función de vista, o si el controlador genera un error `function` se aplica sobre la vista.

Consulte la documentación del conector personalizado de Power Query publicada para obtener una descripción más completa de `Binary.View` y funciones de vista personalizadas.



## Category
Binary
