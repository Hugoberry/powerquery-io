---
title: Type.RecordFields
---

# Type.RecordFields


## Description

Devolve um registo que descreve os campos de um tipo de registo, sendo que cada campo do tipo de registo devolvido tem um nome e um valor correspondentes.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Details

Devolve um registo que descreve os campos de um registo <code>type</code>. Cada campo do tipo de registo devolvido tem um nome e um valor correspondentes, sob a forma de um registo <code>[ Type = type, Optional = logical ]</code>.


## Examples

### Example #1 
Encontrar o nome e o valor do registo &lt;code&gt;[ A = number, optional B = any]&lt;/code&gt;.
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
