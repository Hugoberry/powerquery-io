---
title: Type.OpenRecord
---

# Type.OpenRecord


Retourne une version ouverte du type d&#39;enregistrement donné (ou le même type, s&#39;il est déjà ouvert).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

Retourne une version ouverte du <code>record</code> <code>type</code> donné (ou le même type, s'il est déjà ouvert).


## Examples

### Example #1 
Créez une version ouverte de &lt;code&gt;type [ A = number]&lt;/code&gt;.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
