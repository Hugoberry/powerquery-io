---
title: Table.FromValue
---

# Table.FromValue


## Description

Opretter en tabel med en kolonne ud fra den eller de angivne værdier.


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Details

Opretter en tabel med en kolonne, der indeholder den angivne værdi eller liste over værdier, <code>value</code>. Der kan angives en valgfri postparameter, <code>options</code>, for at styre følgende indstillinger:    <ul>    <li> <code>DefaultColumnName</code>: det kolonnenavn, der bruges, når der oprettes en tabel ud fra en liste eller skalaværdi.</li>    </ul>  


## Examples

### Example #1 
Opret en tabel ud fra værdien 1.
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2 
Opret en tabel ud fra listen.
```powerquery
Table.FromValue({1, "Bob", "123-4567"})
```

Result: 
```powerquery
Table.FromRecords({
    [Value = 1],
    [Value = "Bob"],
    [Value = "123-4567"]
})
```


### Example #3 
Opret en tabel ud fra værdien 1 med et brugerdefineret kolonnenavn.
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
