---
title: Number.Log
---

# Number.Log


## Description

Devuelve el logaritmo del número en la base especificada (e, de forma predeterminada).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Details

Devuelve el logaritmo de un número (<code>number</code>) en la base especificada <code>base</code>. Si no se especifica <code>base</code>, el valor predeterminado es Number.E.    Si <code>number</code> es "null", <code>Number.Log</code> devuelve "null".


## Examples

### Example #1 
Obtenga el logaritmo en base 10 de 2.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2 
Obtenga el logaritmo en base e de 2.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
