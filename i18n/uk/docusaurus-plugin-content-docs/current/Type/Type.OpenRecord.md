---
title: Type.OpenRecord
---

# Type.OpenRecord


## Description

Повертає відкриту версію заданого типу запису (або той самий тип, якщо його вже відкрито).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Details

Повертає відкриту версію заданого запису <code>record</code> <code>type</code> (або той самий тип, якщо його вже відкрито).


## Examples

### Example #1 
Створити відкриту версію &lt;code&gt;type [ A = number]&lt;/code&gt;.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
