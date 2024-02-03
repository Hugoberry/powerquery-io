---
title: Type.RecordFields
---

# Type.RecordFields


## Description

Retorna um registro descrevendo os campos de um tipo de registro com cada campo do tipo de registro retornado tendo um nome correspondente e um valor.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Details

Retorna um registro descrevendo os campos de um registro <code>type</code>. Cada campo do tipo de registro retornado tem um nome correspondente e um valor, na forma de um registro <code>[ Tipo = tipo,Opcional = lógico ]</code>.


## Examples

### Example #1 
Encontre o nome e o valor do registro &lt;code&gt;[ A = número, opcional B = qualquer um]&lt;/code&gt;.
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
