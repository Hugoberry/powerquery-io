---
title: Type.RecordFields
---

# Type.RecordFields


## Description

Vraća zapis koji opisuje polja tipa zapisa, gde svako polje vraćenog tipa zapisa ima odgovarajuće ime i vrednost.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Details

Vraća zapis koji opisuje polja zapisa <code>type</code>. Svako polje vraćenog tipa zapisa ima odgovarajuće ime i vrednost u obliku zapisa <code>[ Type = type, Optional = logical ]</code>.


## Examples

### Example #1 
Pronađite ime i vrednost zapisa &lt;code&gt;[ A = number, optional B = any]&lt;/code&gt;.
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
