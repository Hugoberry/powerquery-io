---
title: Table.ViewFunction
---

# Table.ViewFunction


Creates a function that can be intercepted by a handler defined on a view (via Table.View).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Remarks

Creates a view function based on `function` that can be handled in a view created by `Table.View`.

The `OnInvoke` handler of `Table.View` can be used to define a handler for the view function.

As with the handlers for built-in operations, if no `OnInvoke` handler is specified, or if it does not handle the view function, or if an error is raised by the handler, `function` is applied on top of the view.

Refer to the published Power Query custom connector documentation for a more complete description of `Table.View` and custom view functions.



## Category
Table.Table construction
