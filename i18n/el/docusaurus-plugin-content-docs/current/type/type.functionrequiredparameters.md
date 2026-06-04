---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


Επιστρέφει έναν αριθμό που υποδεικνύει τον ελάχιστο αριθμό παραμέτρων που απαιτούνται για την κλήση του τύπου συνάρτησης.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Remarks

Επιστρέφει έναν αριθμό που υποδεικνύει τον ελάχιστο αριθμό παραμέτρων που απαιτούνται για την κλήση της εισόδου `type` της συνάρτησης.


## Examples

### Example #1
Εύρεση των απαιτούμενων παραμέτρων στη συνάρτηση `(x as number, optional y as text)`.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
