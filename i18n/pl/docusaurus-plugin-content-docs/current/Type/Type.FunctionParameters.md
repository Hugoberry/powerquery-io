---
title: Type.FunctionParameters
---

# Type.FunctionParameters


## Description

Zwraca rekord z wartościami pól ustawionymi jako nazwy parametrów typu funkcji i wartościami ustawionymi jako odpowiednie typy.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Details

Zwraca rekord z wartościami pól ustawionymi jako nazwy parametrów funkcji <code>type</code> i wartościami ustawionymi jako odpowiednie typy.


## Examples

### Example #1 
Znajdź typy parametrów funkcji &lt;code&gt;(x as number, y as text)&lt;/code&gt;.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
