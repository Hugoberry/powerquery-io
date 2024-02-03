---
title: Type.ClosedRecord
---

# Type.ClosedRecord


## Description

Returnerer en lukket version af den angivne posttype (eller samme type, hvis den allerede er lukket).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Details

Returnerer en lukket version af den angivne <code>record</code> <code>type</code> (eller den samme type, hvis den allerede er lukket).


## Examples

### Example #1 
Opret en lukket version af &lt;code&gt;type [ A = number,…]&lt;/code&gt;.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
