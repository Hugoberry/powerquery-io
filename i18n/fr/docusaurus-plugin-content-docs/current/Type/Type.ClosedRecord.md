---
title: Type.ClosedRecord
---

# Type.ClosedRecord


Retourne une version fermée du type d&#39;enregistrement donné (ou le même type, s&#39;il est déjà fermé).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

Retourne une version fermée du <code>record</code> <code>type</code> donné (ou le même type, s'il est déjà fermé).


## Examples

### Example #1 
Créez une version fermée de &lt;code&gt;type [ A = number,…]&lt;/code&gt;.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
