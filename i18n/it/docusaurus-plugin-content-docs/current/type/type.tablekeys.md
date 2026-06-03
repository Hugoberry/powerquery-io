---
title: Type.TableKeys
---

# Type.TableKeys


Restituisce l'elenco di chiavi probabilmente vuoto per il tipo di tabella specificato.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

Restituisci l'elenco di chiavi probabilmente vuoto per il tipo di tabella specificato.  
  
Ogni chiave è definita usando un record nel formato seguente:

-   `Columns`: un elenco di nomi di colonne che definiscono la chiave
-   `Primary`: `true` se la chiave è la chiave primaria della tabella; altrimenti, `false`


## Examples

### Example #1
Restituisci le informazioni chiave per un tipo di tabella.
```powerquery
let
    BaseType = type table [ID = number, Name = text],
    AddKey = Type.AddTableKey(BaseType, {"ID"}, true),
    DetailsOfKeys = Type.TableKeys(AddKey)
in
    DetailsOfKeys
```

Result: 
```powerquery
{[Columns = {"ID"}, Primary = true]}
```




## Category
Type
