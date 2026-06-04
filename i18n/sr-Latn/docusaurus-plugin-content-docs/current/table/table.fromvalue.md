---
title: Table.FromValue
---

# Table.FromValue


Kreira tabelu sa kolonom od navedenih vrednosti.


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Remarks

Kreira tabelu sa kolonom koja sadrži navedenu vrednost ili listu vrednosti, `value`. Može se navesti opciona vrednost parametra zapisa, `options`, za kontrolu sledećih opcija:

-   `DefaultColumnName`: Ime kolone korišćeno prilikom kreiranja tabele od liste ili skalarne vrednosti.


## Examples

### Example #1
Kreiranje tabele od vrednosti 1.
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2
Kreiranje tabele od liste.
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
Kreirajte tabelu od vrednosti 1, sa prilagođenim imenom kolone.
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
