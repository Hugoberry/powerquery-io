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

Crea una función de vista basada en <code>function</code> que se puede controlar en una vista creada por <code>Table.View</code>.<br />El controlador <code>OnInvoke</code> de <code>Table.View</code> se puede utilizar para definir un controlador para la función de vista.<br />Al igual que con los controladores para operaciones integradas, si no se especifica ningún controlador <code>OnInvoke</code>, o si no maneja la función de vista, o si el controlador genera un error <code>function</code> se aplica sobre la vista.<br />Consulte la documentación del conector personalizado de Power Query publicada para obtener una descripción más completa de <code>Table.View</code> y funciones de vista personalizadas.<br />



## Category
Table.Table construction
