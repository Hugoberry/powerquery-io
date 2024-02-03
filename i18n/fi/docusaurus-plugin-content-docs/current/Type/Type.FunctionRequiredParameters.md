---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


## Description

Palauttaa luvun, joka ilmaisee funktion tyypin käynnistämiseen tarvittavien parametrien vähimmäismäärän.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Details

Palauttaa luvun, joka ilmaisee funktion syötteen <code>type</code> käynnistämiseen tarvittavien parametrien vähimmäismäärän.


## Examples

### Example #1 
Etsi funktion &lt;code&gt;(x as number, optional y as text)&lt;/code&gt; vaadittujen parametrien määrä.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
