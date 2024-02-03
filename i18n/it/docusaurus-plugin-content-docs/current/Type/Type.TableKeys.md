---
title: Type.TableKeys
---

# Type.TableKeys


## Description

Restituisce l&#39;elenco di chiavi probabilmente vuoto per il tipo di tabella specificato.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Details

Restituisci l'elenco di chiavi probabilmente vuoto per il tipo di tabella specificato.<br />    <br />    Ogni chiave è definita usando un record nel formato seguente:    <ul>      <li>        <code>Columns</code>: un elenco di nomi di colonne che definiscono la chiave      </li>      <li>        <code>Primary</code>: <code>true</code> se la chiave è la chiave primaria della tabella; altrimenti, <code>false</code>      </li>    </ul>    


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
