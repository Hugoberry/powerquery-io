---
title: Binary.ViewFunction
---

# Binary.ViewFunction


## Description

Tworzy funkcję, która może zostać przechwycona przez procedurę obsługi zdefiniowaną w widoku (za pomocą obiektu Binary.View).


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Details

Tworzy funkcję widoku na podstawie elementu <code>function</code>, który może być obsługiwany w widoku utworzonym za pomocą funkcji <code>Binary.View</code>.<br />Procedura obsługi <code>OnInvoke</code> funkcji <code>Binary.View</code> może służyć do zdefiniowania procedury obsługi dla funkcji widoku.<br />Tak jak w przypadku procedur obsługi dla operacji wbudowanych, jeśli nie zostanie określona żadna procedura obsługi <code>OnInvoke</code>, bądź procedura obsługi nie obsługuje funkcji widoku lub zostanie zgłoszony błąd przez procedurę obsługi, element <code>function</code> zostanie zastosowany na wierzchu widoku.<br />Z bardziej kompleksowym opisem funkcji <code>Binary.View</code> i niestandardowymi funkcjami widoku można zapoznać się w opublikowanej dokumentacji dotyczącej łącznika niestandardowego usługi Power Query.<br />



## Category
Binary
