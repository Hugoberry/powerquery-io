---
title: Type.ClosedRecord
---

# Type.ClosedRecord


## Description

Palauttaa suljetun version annetusta tietuetyypistä (tai saman tyypin, jos se on jo suljettu).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Details

Palauttaa suljetun version annetusta kohteesta <code>record</code> <code>type</code> (tai saman tyypin, jos se on jo suljettu).


## Examples

### Example #1 
Luo suljettu versio kohteesta &lt;code&gt;type [ A = number,…]&lt;/code&gt;.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
