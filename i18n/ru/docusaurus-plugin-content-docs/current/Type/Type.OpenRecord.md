---
title: Type.OpenRecord
---

# Type.OpenRecord


## Description

Возвращает открытую версию данного типа записи (или такой же тип, если запись уже является открытой).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Details

Возвращает открытую версию данной записи <code>record</code> <code>type</code> (или такой же тип, если запись уже является открытой).


## Examples

### Example #1 
Создать открытую версию &lt;code&gt;type [ A = number]&lt;/code&gt;.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
