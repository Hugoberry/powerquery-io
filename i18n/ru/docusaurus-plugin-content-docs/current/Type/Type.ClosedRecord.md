---
title: Type.ClosedRecord
---

# Type.ClosedRecord


## Description

Возвращает закрытую версию данного типа записи (или такой же тип, если он уже закрыт).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Details

Возвращает закрытую версию данной записи <code>record</code> <code>type</code> (или тот же тип, если он уже закрыт).


## Examples

### Example #1 
Создать закрытую версию &lt;code&gt;type [ A = number,…]&lt;/code&gt;.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
