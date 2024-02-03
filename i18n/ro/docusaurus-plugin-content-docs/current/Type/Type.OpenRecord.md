---
title: Type.OpenRecord
---

# Type.OpenRecord


## Description

Returnează o versiune deschisă a tipului de înregistrare dat (sau același tip, dacă este deja deschisă).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Details

Returnează o versiune deschisă a <code>înregistrării</code> date <code>type</code> (sau același tip, dacă este deja deschisă).


## Examples

### Example #1 
Creați o versiune deschisă de &lt;code&gt;type [ A = number]&lt;/code&gt;.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
