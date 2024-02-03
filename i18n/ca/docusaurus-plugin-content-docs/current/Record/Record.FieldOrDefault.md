---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


## Description

Retorna el valor del camp especificat en un registre o el valor per defecte si no es troba el camp.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Details

Retorna el valor del camp especificat <code>field</code> al registre <code>record</code>. Si no es troba el camp, es retorna el valor opcional <code>defaultValue</code>.


## Examples

### Example #1 
Cerca el valor del camp &#34;Phone&#34; al registre o retorna un valor nul si no existeix.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2 
Cerca el valor del camp &#34;Phone&#34; al registre o retorna el valor per defecte si no existeix.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
