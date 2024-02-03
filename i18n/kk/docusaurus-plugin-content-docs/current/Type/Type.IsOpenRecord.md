---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


## Description

Жазба түрінің ашық екендігін көрсетеді.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Details

<code>type</code> жазбасының ашық екендігін көрсететін <code>логикалық мәнді</code> береді.


## Examples

### Example #1 
&lt;code&gt;type [ A = number, ...]&lt;/code&gt;жазбасының ашық екендігін анықтаңыз.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
