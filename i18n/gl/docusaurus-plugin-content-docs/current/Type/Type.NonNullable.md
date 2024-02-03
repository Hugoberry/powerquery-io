---
title: Type.NonNullable
---

# Type.NonNullable


## Description

Devolve o tipo non anulable dun tipo.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Details

Devolve o tipo non <code>anulable</code> de <code>type</code>.


## Examples

### Example #1 
Devolver o tipo non anulable do &lt;code&gt;número de tipo anulable&lt;/code&gt;.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
