---
title: Type.FunctionParameters
---

# Type.FunctionParameters


Returnerer en post, hvor feltværdier er angivet til navnet på parametrene for en funktionstype, og deres værdier er angivet til deres tilsvarende typer.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Remarks

Returnerer en post, hvor feltværdierne er angivet til navnet på parametrene for <code>type</code>, og deres værdier er angivet til deres tilsvarende typer.


## Examples

### Example #1 
Find typerne af parametre for funktionen &lt;code&gt;(x as number, y as text)&lt;/code&gt;.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
