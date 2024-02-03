---
title: Type.OpenRecord
---

# Type.OpenRecord


## Description

Atgriež sniegtā ieraksta tipa atvērtu versiju (vai to pašu tipu, ja tā jau ir atvērta).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Details

Atgriež sniegtā <code>record</code> <code>type</code> atvērtu versiju (vai to pašu tipu, ja tā jau ir atvērta).


## Examples

### Example #1 
Izveidojiet &lt;code&gt;type [ A = number]&lt;/code&gt; atvērtu versiju.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
