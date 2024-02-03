---
title: Type.ClosedRecord
---

# Type.ClosedRecord


## Description

Returnează o versiune închisă a tipului de înregistrare dat (sau același tip, dacă este deja închis).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Details

Returnează o versiune închisă a <code>înregistrării</code> date <code>type</code> (sau același tip, dacă este deja închis).


## Examples

### Example #1 
Creați o versiune închisă a &lt;code&gt;tipului [ A = number,…]&lt;/code&gt;.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
