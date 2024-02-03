---
title: Type.FunctionParameters
---

# Type.FunctionParameters


## Description

Atgriež ierakstu ar lauku vērtībām, kas iestatītas funkcijas tipa parametru nosaukumam, un to vērtības, kas iestatītas atbilstošajiem tipiem.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Details

Atgriež ierakstu ar lauku vērtībām, kas iestatītas <code>type</code> parametru nosaukumam, un to vērtības, kas iestatītas atbilstošajiem tipiem.


## Examples

### Example #1 
Atrodiet funkcijas &lt;code&gt;(x as number, y as text)&lt;/code&gt; parametru tipus.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
