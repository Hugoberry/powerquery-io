---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


## Description

Vrátí informace o tom, jestli je záznam otevřeného typu.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Details

Vrátí logickou hodnotu (<code>logical</code>) označující, jestli je záznam <code>type</code> otevřený.


## Examples

### Example #1 
Určí, jestli je záznam &lt;code&gt;type [ A = number, ...]&lt;/code&gt; otevřený.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
