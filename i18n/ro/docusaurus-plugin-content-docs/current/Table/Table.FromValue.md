---
title: Table.FromValue
---

# Table.FromValue


## Description

Creează un tabel cu o coloană din valorile furnizate.


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Details

Creează un tabel cu o coloană ce conține valoarea furnizată sau lista de valori, <code>value</code>. Un parametru opțional de înregistrare, <code>options</code>, poate fi specificat pentru a controla următoarele opțiuni:    <ul>    <li> <code>DefaultColumnName</code>: numele de coloană utilizat la crearea unui tabel dintr-o listă sau dintr-o valoare scalară.</li>    </ul>  


## Examples

### Example #1 
Creaţi un tabel de la valoarea 1.
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2 
Creați un tabel din listă.
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
Creați un tabel de la valoarea 1, cu un nume de coloană particularizat.
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
