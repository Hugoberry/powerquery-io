---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


## Description

Pateikiamas skaičius, nurodantis minimalų skaičių parametrų, reikalingą funkcijos tipui iškviesti.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Details

Pateikiamas skaičius, nurodantis minimalų skaičių parametrų, reikalingą funkcijos įvesčiai <code>type</code> iškviesti.


## Examples

### Example #1 
Raskite funkcijos &lt;code&gt;(x as number, optional y as text)&lt;/code&gt; reikalingų parametrų skaičių.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
