---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


## Description

Vráti informácie o tom, či je typ záznamu otvorený.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Details

Vráti <code>logickú hodnotu</code> označujúcu, či je záznam <code>type</code> otvorený.


## Examples

### Example #1 
Zisti, či je záznam &lt;code&gt;typ [ A = číslo, ...]&lt;/code&gt; otvorený.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
