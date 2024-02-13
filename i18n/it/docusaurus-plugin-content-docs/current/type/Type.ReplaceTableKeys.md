---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


Restituisce un nuovo tipo di tabella con tutte le chiavi sostituite dall&#39;elenco di chiavi specificato.


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Remarks

Restituisce un nuovo tipo di tabella con tutte le chiavi sostituite dall'elenco di chiavi specificato.<br />    <br />    Ogni chiave è definita usando un record nel formato seguente:    <ul>      <li>        <code>Columns</code>: un elenco di nomi di colonne che definiscono la chiave      </li>      <li>        <code>Primary</code>: <code>true</code> se la chiave è la chiave primaria della tabella; altrimenti, <code>false</code>      </li>    </ul>    L'elenco specificato di chiavi viene convalidato per garantire che non siano definite più chiavi primarie e che nel tipo di tabella ci siano tutti i nomi di colonna chiave.    


## Examples

### Example #1 
Sostituisci le informazioni chiave in un tipo di tabella.
```powerquery
let
    BaseType = type table [ID = number, FirstName = text, LastName = text],
    KeysAdded = Type.ReplaceTableKeys(
        BaseType, 
        {
            [Columns = {"ID"}, Primary = true],
            [Columns = {"FirstName", "LastName"}, Primary = false]
        }
    ),
    DetailsOfKeys = Type.TableKeys(KeysAdded)
in
    DetailsOfKeys
```

Result: 
```powerquery
{
    [Columns = {"ID"}, Primary = true],
    [Columns = {"FirstName", "LastName"}, Primary = false]
}
```


### Example #2 
Cancella le informazioni chiave definite in precedenza in un tipo di tabella.
```powerquery
let
    TypeWithKey = Type.AddTableKey(type table [ID = number, Name = text], {"ID"}, true),
    KeyRemoved = Type.ReplaceTableKeys(TypeWithKey, {}),
    DetailsOfKeys = Type.TableKeys(KeyRemoved)
in
    DetailsOfKeys
```

Result: 
```powerquery
{}
```




## Category
Type
