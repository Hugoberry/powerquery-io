---
title: Type.RecordFields
---

# Type.RecordFields


## Description

Retourne un enregistrement décrivant les champs d&#39;un type d&#39;enregistrement avec chaque champ du type d&#39;enregistrement retourné ayant un nom et une valeur correspondants.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Details

Retourne un enregistrement qui décrit les champs d'un enregistrement <code>type</code>. Chaque champ du type d'enregistrement retourné a un nom et une valeur correspondants, sous la forme d'un enregistrement <code>[ Type = type, Optional = logical ]</code>.


## Examples

### Example #1 
Trouvez le nom et la valeur de l&#39;enregistrement &lt;code&gt;[ A = number, optional B = any]&lt;/code&gt;.
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
