---
title: Type.FunctionParameters
---

# Type.FunctionParameters


Returnerar en post med fältvärden satta till namnet på en funktionstyps parametrar, och deras värden satta till sina motsvarande typer.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Remarks

Returnerar en post med fältvärden satta till namnet på parametrarna för <code>type</code>, och deras värden satta till sina motsvarande typer.


## Examples

### Example #1 
Hitta typen av parametrar till funktionen &lt;code&gt;(x as number, y as text)&lt;/code&gt;.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
