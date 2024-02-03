---
title: Type.OpenRecord
---

# Type.OpenRecord


## Description

Palauttaa avatun version annetusta tietuetyypistä (tai saman tyypin, jos se on jo avattu).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Details

Palauttaa avatun version annetusta kohteesta <code>record</code> <code>type</code> (tai saman tyypin, jos se on jo avattu).


## Examples

### Example #1 
Luo avattu versio kohteesta &lt;code&gt;type [ A = number]&lt;/code&gt;.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
