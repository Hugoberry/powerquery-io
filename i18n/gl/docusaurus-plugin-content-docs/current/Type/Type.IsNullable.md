---
title: Type.IsNullable
---

# Type.IsNullable


## Description

Devolve o valor true se un tipo é anulable, do contrario, é falso.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Details

Devolve <code>verdadeiro</code> se un tipo é <code>anulable</code>; do contrario, devolve <code>falso</code>.


## Examples

### Example #1 
Determine se &lt;code&gt;número&lt;/code&gt; é anulable.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
Determine se &lt;code&gt;número de tipo anulable&lt;/code&gt; é anulable.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
