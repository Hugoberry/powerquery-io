---
title: Type.FunctionParameters
---

# Type.FunctionParameters


## Description

Vráti záznam s hodnotami poľa nastavený na názov parametrov typu funkcie, a ich hodnoty nastavené na zodpovedajúce typy.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Details

Vráti záznam s hodnotami poľa nastavený na názov parametrov <code>type</code>, a ich hodnoty nastavené na zodpovedajúce typy.


## Examples

### Example #1 
Nájdi typy parametrov funkcie &lt;code&gt;(x ako číslo, y ako text)&lt;/code&gt;.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
