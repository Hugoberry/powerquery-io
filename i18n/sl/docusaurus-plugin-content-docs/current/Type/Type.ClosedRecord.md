---
title: Type.ClosedRecord
---

# Type.ClosedRecord


## Description

Vrne zaprto različico dane vrste zapisa (ali isto vrsto, če je ta že zaprta).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Details

Vrne zaprto različico <code>zapisa</code> <code>type</code> (ali isto vrsto, če je ta že zaprta).


## Examples

### Example #1 
Ustvarite zaprto različico &lt;code&gt;type [ A = number,…]&lt;/code&gt;.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
