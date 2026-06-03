---
title: Type.RecordFields
---

# Type.RecordFields


Devolve um registo que descreve os campos de um tipo de registo, sendo que cada campo do tipo de registo devolvido tem um nome e um valor correspondentes.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Remarks

Devolve um registo que descreve os campos de um registo `type`. Cada campo do tipo de registo devolvido tem um nome e um valor correspondentes, sob a forma de um registo `[ Type = type, Optional = logical ]`.


## Examples

### Example #1
Encontrar o nome e o valor do registo `[ A = number, optional B = any]`.
```powerquery
Type.RecordFields(type [A = number, optional B = any])
```

Result: 
```powerquery
[
    A = [Type = type number, Optional = false],
    B = [Type = type any, Optional = true]
]
```




## Category
Type
