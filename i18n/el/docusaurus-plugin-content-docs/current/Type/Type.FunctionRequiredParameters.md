---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


## Description

Επιστρέφει έναν αριθμό που υποδεικνύει τον ελάχιστο αριθμό παραμέτρων που απαιτούνται για την κλήση του τύπου συνάρτησης.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Details

Επιστρέφει έναν αριθμό που υποδεικνύει τον ελάχιστο αριθμό παραμέτρων που απαιτούνται για την κλήση της εισόδου <code>type</code> της συνάρτησης.


## Examples

### Example #1 
Εύρεση των απαιτούμενων παραμέτρων στη συνάρτηση &lt;code&gt;(x as number, optional y as text)&lt;/code&gt;.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
