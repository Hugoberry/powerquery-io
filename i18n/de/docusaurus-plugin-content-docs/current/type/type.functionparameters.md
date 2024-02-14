---
title: Type.FunctionParameters
---

# Type.FunctionParameters


Gibt einen Datensatz zurück, bei dem Feldwerte auf den Namen der Parameter eines Funktionstyps festgelegt sind und deren Werte auf ihre entsprechenden Typen festgelegt sind.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Remarks

Gibt einen Datensatz zurück, bei dem Feldwerte auf den Namen der Parameter von <code>type</code> festgelegt sind und deren Werte auf deren entsprechenden Typen festgelegt sind.


## Examples

### Example #1 
Suchen Sie die Typen der Parameter für die Funktion &lt;code&gt;(x as number, y as text)&lt;/code&gt;.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
