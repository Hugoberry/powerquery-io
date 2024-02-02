---
title: Binary.ViewFunction
---

# Binary.ViewFunction


## Description

Creates a function that can be intercepted by a handler defined on a view (via Binary.View).


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Details

Creates a view function based on <code>function</code> that can be handled in a view created by <code>Binary.View</code>.<br />The <code>OnInvoke</code> handler of <code>Binary.View</code> can be used to define a handler for the view function.<br />As with the handlers for built-in operations, if no <code>OnInvoke</code> handler is specified, or if it does not handle the view function, or if an error is raised by the handler, <code>function</code> is applied on top of the view.<br />Refer to the published Power Query custom connector documentation for a more complete description of <code>Binary.View</code> and custom view functions.<br />



## Category
Binary
