---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Retorna se um tipo de registro for aberto.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Retorna uma <code>lógico</code> indicando se um registro <code>type</code> é aberto.


## Examples

### Example #1 
Determine se o registro &lt;code&gt;tipo [ A = número, ...]&lt;/code&gt; é aberto.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
