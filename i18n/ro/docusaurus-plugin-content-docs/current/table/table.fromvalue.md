---
title: Table.FromValue
---

# Table.FromValue


Creează un tabel cu o coloană din valorile furnizate.


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Remarks

Creează un tabel cu o coloană ce conține valoarea furnizată sau lista de valori, `value`. Un parametru opțional de înregistrare, `options`, poate fi specificat pentru a controla următoarele opțiuni:

-   `DefaultColumnName`: numele de coloană utilizat la crearea unui tabel dintr-o listă sau dintr-o valoare scalară.


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
