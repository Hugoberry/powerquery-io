---
title: Table.FromValue
---

# Table.FromValue


## Description

Ustvari tabelo s stolpcem iz podanih vrednosti.


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Details

Ustvari tabelo s stolpcem, ki vsebuje navedeno vrednost ali seznam vrednosti, <code>value</code>. Določite lahko izbirni parameter zapisa (<code>options</code>), s katerim nadzorujete te možnosti:    <ul>    <li> <code>DefaultColumnName</code>: ime stolpca, ki je uporabljeno pri ustvarjanju tabele iz seznama ali skalarne vrednosti.</li>    </ul>  


## Examples

### Example #1 
Ustvarite tabelo iz vrednosti 1.
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2 
Ustvarite tabelo iz seznama.
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
Ustvarite tabelo iz vrednosti 1 z imenom stolpca po meri.
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
