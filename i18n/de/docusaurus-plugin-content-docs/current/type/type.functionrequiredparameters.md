---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


Gibt eine Zahl zurück, die die minimale Anzahl von Parametern angibt, die zum Aufrufen des Funktionstyps erforderlich sind.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Remarks

Gibt eine Zahl zurück, die die minimale Anzahl von Parametern angibt, die zum Aufrufen von <code>type</code> (Eingabe) der Funktion erforderlich sind.


## Examples

### Example #1 
Suchen Sie die Anzahl erforderlicher Parameter für die Funktion &lt;code&gt;(x as number, optional y as text)&lt;/code&gt;.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
