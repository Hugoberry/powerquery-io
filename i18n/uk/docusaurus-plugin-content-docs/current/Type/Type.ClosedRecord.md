---
title: Type.ClosedRecord
---

# Type.ClosedRecord


## Description

Повертає закриту версію заданого типу запису (або той самий тип, якщо його вже закрито).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Details

Повертає закриту версію заданого запису <code>record</code> <code>type</code> (або той самий тип, якщо його вже закрито).


## Examples

### Example #1 
Створити закриту версію &lt;code&gt;type [ A = number,…]&lt;/code&gt;.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
