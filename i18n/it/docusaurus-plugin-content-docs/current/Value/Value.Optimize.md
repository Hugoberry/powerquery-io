---
title: Value.Optimize
---

# Value.Optimize


## Description

Segnala a Value.Expression di restituire l&#39;espressione ottimizzata per un valore.


## Syntax

```powerquery
Value.Optimize(
    value as any
) as any
```


## Details

Quando usata all'interno di Value.Expression, se <code>value</code> rappresenta una query che può essere ottimizzata, questa funzione indica che deve essere restituita l'espressione ottimizzata. In caso contrario, verrà passato il valore <code>value</code> senza alcun effetto.



## Category
Expression
