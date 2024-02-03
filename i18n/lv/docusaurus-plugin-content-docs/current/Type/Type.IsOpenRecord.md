---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


## Description

Atgriež, vai ieraksta tips ir atvērts.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Details

Atgriež <code>logical</code>, kas norāda, vai ieraksts <code>type</code> ir atvērts.


## Examples

### Example #1 
Nosakiet, vai ieraksts &lt;code&gt;type [ A = number, ...]&lt;/code&gt; ir atvērts.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
