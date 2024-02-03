---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


## Description

Egy rekord megadott mezőjének értékét adja vissza, illetve az alapértelmezett értéket, ha a mező nem található.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Details

A(z) <code>record</code> rekord megadott <code>field</code> mezőjének értékét adja vissza. Ha a mező nem található, a nem kötelező <code>defaultValue</code> értéket adja vissza.


## Examples

### Example #1 
Megállapítja a rekordban levő Phone mező értékét, vagy null értéket ad vissza, ha az nem létezik.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2 
Megállapítja a rekordban levő Phone mező értékét, vagy az alapértelmezett értéket adja vissza, ha az nem létezik.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
