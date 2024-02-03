---
title: Type.RecordFields
---

# Type.RecordFields


## Description

Devolve un rexistro no que se describen os campos dun tipo de rexistro con cada campo do tipo de rexistro devolto que ten un nome e un valor correspondentes.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Details

Devolve un rexistro no que se describen os campos dun rexistro <code>type</code>. Cada campo do tipo de rexistro devolto ten un nome correspondente e un valor en forma de rexistro <code>[ Type = type, Optional = logical ]</code>.


## Examples

### Example #1 
Busque o nome e valor do rexistro &lt;code&gt;[ A = number, optional B = any]&lt;/code&gt;.
```powerquery
Type.RecordFields(type [A = number, optional B = any])
```

Result: 
```powerquery
[
    A = [Type = type number, Optional = false],
    B = [Type = type any, Optional = true]
]
```




## Category
Type
