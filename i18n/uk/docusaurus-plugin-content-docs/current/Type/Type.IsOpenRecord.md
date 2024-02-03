---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


## Description

Повертає результат, чи запис відкрито.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Details

Повертає значення <code>logical</code>, яке вказує, чи запис <code>type</code> відкрито.


## Examples

### Example #1 
Визначити, чи запис &lt;code&gt;type [ A = number, ...]&lt;/code&gt; відкрито.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
