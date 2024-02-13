---
title: Table.FromValue
---

# Table.FromValue


Maakt een tabel met een kolom van de opgegeven waarde(n).


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Remarks

Maakt een tabel met een kolom waarin de opgegeven waarde of lijst met waarden <code>value</code> staat. Er kan een optionele recordparameter, <code>options</code>, worden opgegeven om de volgende opties te bepalen:    <ul>    <li> <code>DefaultColumnName</code> : de kolomnaam die wordt gebruikt bij het maken van een tabel van een lijst of scalaire waarde.</li>    </ul>  


## Examples

### Example #1 
Een tabel van de waarde 1 maken.
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2 
Een tabel van de lijst maken.
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
Een tabel maken vanaf de waarde 1, met een aangepaste kolomnaam.
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
