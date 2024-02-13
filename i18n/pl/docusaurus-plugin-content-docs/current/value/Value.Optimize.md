---
title: Value.Optimize
---

# Value.Optimize


Sygnalizuje funkcji Value.Expression, aby zwracała zoptymalizowane wyrażenie dla wartości.


## Syntax

```powerquery
Value.Optimize(
    value as any
) as any
```


## Remarks

W przypadku użycia w funkcji Value.Expression, gdy element <code>value</code> reprezentuje zapytanie, które może zostać zoptymalizowane, ta funkcja wskazuje, że powinno zostać zwrócone zoptymalizowane wyrażenie. W przeciwnym razie element <code>value</code> zostanie przekazany bez żadnego efektu.



## Category
Expression
