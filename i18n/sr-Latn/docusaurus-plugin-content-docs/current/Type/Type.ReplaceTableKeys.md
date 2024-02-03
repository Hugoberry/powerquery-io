---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


## Description

Vraća novi tip tabele kod koga su svi ključevi zamenjeni navedenom listom ključeva.


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Details

Vraća novi tip tabele sa svim ključevima zamenjenim navedenom listom ključeva.<br />    <br />    Svaki ključ je definisan pomoću zapisa u sledećem obrascu:    <ul>      <li>        <code>Columns</code>: spisak imena kolona koje definišu ključ      </li>      <li>        <code>Primary</code>: <code>true</code> ako je ključ primarni ključ tabele; inače, <code>false</code>      </li>    </ul>    Proverena je valjanost navedene liste ključeva kako bi se osiguralo da nije definisano više od jednog primarnog ključa i da sva imena kolona ključa postoje u tipu tabele.    


## Examples

### Example #1 
Zamenite ključne informacije o tipu tabele.
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
Obrišite informacije o ključu koje su prethodno definisane u tipu tabele.
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
