---
title: Function.Invoke
---

# Function.Invoke


Ruft die angegebene Funktion auf.


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Remarks

Ruft die angegebene Funktion unter Verwendung der angegebenen Liste mit Argumenten auf und gibt das Ergebnis zurück.


## Examples

### Example #1 
Ruft &#34;Record.FieldNames&#34; mit einem Argument ([A=1,B=2]) auf.
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
