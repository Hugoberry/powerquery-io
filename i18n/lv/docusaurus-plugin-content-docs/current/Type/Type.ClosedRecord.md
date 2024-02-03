---
title: Type.ClosedRecord
---

# Type.ClosedRecord


## Description

Atgriež sniegtā ieraksta tipa slēgtu versiju (vai to pašu tipu, ja tas jau ir noslēgts).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Details

Atgriež sniegtā <code>record</code> <code>type</code> slēgtu versiju (vai to pašu tipu, ja tas jau ir noslēgts).


## Examples

### Example #1 
Izveidojiet &lt;code&gt;type [ A = number,…]&lt;/code&gt; slēgtu versiju.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
