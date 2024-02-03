---
title: Table.FromValue
---

# Table.FromValue


## Description

Vytvoří ze zadaných hodnot tabulku se sloupcem.


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Details

Vytvoří tabulku se sloupcem obsahujícím zadanou hodnotu nebo seznam hodnot (<code>value</code>). Nepovinným parametrem záznamu <code>options</code> se dají určit následující možnosti:    <ul>    <li> <code>DefaultColumnName</code>: název sloupce použitý při sestavování tabulky ze seznamu nebo skalární hodnoty</li>    </ul>  


## Examples

### Example #1 
Vytvoří tabulku z hodnoty 1.
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2 
Vytvoří tabulku ze seznamu.
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
Vytvořte tabulku z hodnoty 1 a vlastním názvem sloupce.
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
