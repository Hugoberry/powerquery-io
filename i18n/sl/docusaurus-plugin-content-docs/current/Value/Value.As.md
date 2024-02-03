---
title: Value.As
---

# Value.As


## Description

Vrne vrednost, če je združljiva z določeno vrsto.


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Details

Vrne vrednost, če je združljiva z določeno vrsto. To je enakovredno operaterju "as" v M, z izjemo, da lahko sprejme sklice na vrsto identifikatorja, kot je Number.Type.


## Examples

### Example #1 
Izvrzite število v število.
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
Poskusite izdati besedilno vrednost v število.
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
