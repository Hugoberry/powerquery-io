---
title: Table.FromValue
---

# Table.FromValue


## Description

Erstellt eine Tabelle mit einer Spalte auf der Grundlage der angegebenen Werte.


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Details

Erstellt eine Tabelle mit einer Spalte, die den angegebenen Wert oder die angegebene Werteliste (<code>value</code>) enthält. Ein optionaler Datensatzparameter ("<code>options</code>") kann angegeben werden, um die folgenden Optionen zu steuern:    <ul>    <li> <code>DefaultColumnName</code>: Der Spaltenname, der beim Generieren einer Tabelle aus einer Liste oder einem Skalarwert verwendet wird.</li>    </ul>  


## Examples

### Example #1 
Erstellt eine Tabelle auf der Grundlage des Werts 1.
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2 
Erstellt eine Tabelle aus der Liste.
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
Erstellt eine Tabelle mit einem benutzerdefinierten Spaltennamen auf der Grundlage des Werts 1.
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
