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

Creates a view function based on <code>function</code> that can be handled in a view created by <code>Table.View</code>.<br />The <code>OnInvoke</code> handler of <code>Table.View</code> can be used to define a handler for the view function.<br />As with the handlers for built-in operations, if no <code>OnInvoke</code> handler is specified, or if it does not handle the view function, or if an error is raised by the handler, <code>function</code> is applied on top of the view.<br />Refer to the published Power Query custom connector documentation for a more complete description of <code>Table.View</code> and custom view functions.<br />



## Category
Table.Table construction
