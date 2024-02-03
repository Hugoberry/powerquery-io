---
title: Type.OpenRecord
---

# Type.OpenRecord


## Description

Vrne odprto različico dane vrste zapisa (ali isto vrsto, če je ta že odprta).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Details

Vrne odprto različico <code>zapisa</code> <code>type</code> (ali isto vrsto, če je ta že odprta).


## Examples

### Example #1 
Ustvarite odprto različico &lt;code&gt;vrste [ A = number]&lt;/code&gt;.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
