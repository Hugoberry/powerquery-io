---
title: Type.RecordFields
---

# Type.RecordFields


## Description

Restituisce un record che descrive i campi di un tipo di record in cui ogni campo del tipo di record restituito ha un nome e un valore corrispondente.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Details

Restituisce un record che descrive i campi di un record <code>type</code>. Ogni campo del tipo di record restituito ha un nome e un valore corrispondente, nel formato di un record <code>[ Type = type, Optional = logical ]</code>.


## Examples

### Example #1 
Trovare il nome e il valore del record &lt;code&gt;[ A = number, optional B = any]&lt;/code&gt;.
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
