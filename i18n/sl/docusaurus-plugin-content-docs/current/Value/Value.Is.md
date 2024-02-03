---
title: Value.Is
---

# Value.Is


## Description

Določi, ali je vrednost združljiva z določeno vrsto.


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Details

Določa, ali je vrednost združljiva z podano vrsto. To je enakovredno operaterju "is" v M, z izjemo, da lahko sprejme sklice na vrsto identifikatorja, kot je Number.Type.


## Examples

### Example #1 
Primerjajte dva načina določanja, ali je število združljivo s številko tipa.
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
