---
title: Type.FunctionParameters
---

# Type.FunctionParameters


## Description

Vrátí záznam s hodnotami pole nastavenými na název parametrů typu funkce a jejich hodnotami nastavenými na jejich odpovídající typy.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Details

Vrátí záznamy s hodnotami pole nastavenými na název parametrů <code>type</code> a jejich hodnotami nastavenými na jejich odpovídající typy.


## Examples

### Example #1 
Umožňuje najít typy parametrů pro funkci &lt;code&gt;(x as number, y as text)&lt;/code&gt;.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
