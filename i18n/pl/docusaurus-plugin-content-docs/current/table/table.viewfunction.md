---
title: Table.ViewFunction
---

# Table.ViewFunction


Tworzy funkcję, która może zostać przechwycona przez procedurę obsługi zdefiniowaną w widoku (za pomocą obiektu Table.View).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Remarks

Tworzy funkcję widoku na podstawie elementu `function`, który może być obsługiwany w widoku utworzonym za pomocą funkcji `Table.View`.

Procedura obsługi `OnInvoke` funkcji `Table.View` może służyć do zdefiniowania procedury obsługi dla funkcji widoku.

Tak jak w przypadku procedur obsługi dla operacji wbudowanych, jeśli nie zostanie określona żadna procedura obsługi `OnInvoke`, bądź procedura obsługi nie obsługuje funkcji widoku lub zostanie zgłoszony błąd przez procedurę obsługi, element `function` zostanie zastosowany na wierzchu widoku.

Z bardziej kompleksowym opisem funkcji `Table.View` i niestandardowych funkcji widoku można zapoznać się w opublikowanej dokumentacji dotyczącej łącznika niestandardowego usługi Power Query.



## Category
Table.Table construction
