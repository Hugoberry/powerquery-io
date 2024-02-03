---
title: Type.OpenRecord
---

# Type.OpenRecord


## Description

Returnerar en öppen version av den givna posttypen (eller samma typ, om den redan är stängd).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Details

Returnerar en öppen version av den givna <code>record</code> <code>type</code> (eller samma typ, om den redan är öppen).


## Examples

### Example #1 
Skapa en öppen version av &lt;code&gt;type [ A = number,…]&lt;/code&gt;.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
