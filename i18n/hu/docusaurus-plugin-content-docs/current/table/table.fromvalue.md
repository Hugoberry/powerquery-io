---
title: Table.FromValue
---

# Table.FromValue


Táblát hoz létre a megadott érték(ek)ből álló oszloppal.


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Remarks

Táblát hoz létre a megadott értéket vagy `value` értéklistát tartalmazó oszloppal. Egy opcionális rekordparaméterrel (`options`) meghatározhatja a következő beállításokat:

-   `DefaultColumnName` : Egy tábla listából vagy skaláris értékből történő létrehozásához használt oszlopnév.


## Examples

### Example #1
Tábla létrehozása az 1 értékből.
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2
Létrehoz egy táblát a listából.
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
Tábla létrehozása az 1 értéktől, egyéni oszlopnévvel.
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
