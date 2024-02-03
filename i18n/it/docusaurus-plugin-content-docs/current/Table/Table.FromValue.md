---
title: Table.FromValue
---

# Table.FromValue


## Description

Crea una tabella con una colonna dai valori specificati.


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Details

Crea una tabella con una colonna contenente il valore o l'elenco di valori specificato, <code>value</code>. È possibile specificare un parametro di record facoltativo, <code>options</code>, per controllare le opzioni seguenti:    <ul>    <li> <code>DefaultColumnName</code>: nome di colonna usato durante la creazione di una tabella da un elenco o da un valore scalare.</li>    </ul>  


## Examples

### Example #1 
Creare una tabella dal valore 1.
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2 
Creare una tabella dall&#39;elenco.
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
Creare una tabella dal valore 1 con un nome di colonna personalizzato.
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
