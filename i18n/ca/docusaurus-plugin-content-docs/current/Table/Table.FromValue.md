---
title: Table.FromValue
---

# Table.FromValue


## Description

Crea una taula amb una columna a partir dels valors proporcionats.


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Details

Crea una taula amb una columna que conté el valor o les llistes de valors proporcionats, <code>value</code>. Es pot especificar un paràmetre de registre opcional, <code>options</code>, per controlar les opcions següents:    <ul>    <li> <code>DefaultColumnName</code> : el nom de la columna que s'utilitza en construir una taula d'una llista o un valor escalar.</li>    </ul>  


## Examples

### Example #1 
Crea una taula a partir del valor 1.
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2 
Crea una taula a partir de la llista.
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
Crea una taula a partir del valor 1, amb un nom de columna personalitzat.
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
