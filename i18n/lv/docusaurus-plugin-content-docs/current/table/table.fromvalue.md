---
title: Table.FromValue
---

# Table.FromValue


Tiek izveidota tabula ar kolonnu no norādītās(-ajām) vērtības(-ām).


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Remarks

Tiek izveidota tabula, kurā ir kolonna ar norādīto vērtību vai vērtību sarakstu, `value`. Var norādīt papildu ieraksta parametru `options`, lai kontrolētu tālāk norādītās opcijas.

-   `DefaultColumnName`: kolonnas nosaukums, kas tiek izmantots, veidojot tabulu no saraksta vai skalāras vērtības.


## Examples

### Example #1
Izveidojiet tabulu no 1. vērtības.
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2
Izveidojiet tabulu no saraksta.
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
Izveidojiet tabulu no vērtības 1, izmantojot pielāgotu kolonnas nosaukumu.
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
