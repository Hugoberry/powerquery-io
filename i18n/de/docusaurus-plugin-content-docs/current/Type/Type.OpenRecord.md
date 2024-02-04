---
title: Type.OpenRecord
---

# Type.OpenRecord


## Description

Gibt eine geöffnete Version des angegebenen Datensatztyps zurück (bzw. denselben Typ, wenn dieser bereits geöffnet ist).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Details

Gibt eine geöffnete Version des angegebenen <code>Datensatzes</code> <code>type</code> zurück (bzw. denselben Typ, wenn dieser bereits geöffnet ist).


## Examples

### Example #1 
Erstellen Sie eine geöffnete Version von &lt;code&gt;type [ A = number]&lt;/code&gt;.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
