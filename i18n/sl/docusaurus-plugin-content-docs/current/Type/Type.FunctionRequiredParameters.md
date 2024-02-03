---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


## Description

Vrne število, ki predstavlja najmanjše število parametrov, zahtevanih za poziv vrste funkcije.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Details

Vrne število, ki predstavlja najmanjše število parametrov, zahtevanih za poziv vhoda <code>type</code> funkcije.


## Examples

### Example #1 
Poiščite število zahtevanih parametrov funkcije &lt;code&gt;(x as number, y as text)&lt;/code&gt;.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
