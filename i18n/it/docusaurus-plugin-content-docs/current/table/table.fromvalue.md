---
title: Table.FromValue
---

# Table.FromValue


Crea una tabella con una colonna dai valori specificati.


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Remarks

Crea una tabella con una colonna contenente il valore o l'elenco di valori specificato, `value`. È possibile specificare un parametro di record facoltativo, `options`, per controllare le seguenti opzioni:

-   `DefaultColumnName`: nome di colonna usato durante la creazione di una tabella da un elenco o da un valore scalare.


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
Creare una tabella dall'elenco.
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
