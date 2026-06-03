---
title: Type.RecordFields
---

# Type.RecordFields


Retorna um registro descrevendo os campos de um tipo de registro com cada campo do tipo de registro retornado tendo um nome correspondente e um valor.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Remarks

Retorna um registro descrevendo os campos de um registro `type`. Cada campo do tipo de registro retornado tem um nome correspondente e um valor, na forma de um registro `[ Tipo = tipo,Opcional = lógico ]`.


## Examples

### Example #1
Encontre o nome e o valor do registro `[ A = número, opcional B = qualquer um]`.
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
