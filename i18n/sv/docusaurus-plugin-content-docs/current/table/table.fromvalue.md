---
title: Table.FromValue
---

# Table.FromValue


Skapar en tabell med en kolumn från det eller de angivna värdena.


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Remarks

Skapar en tabell med en kolumn som innehåller det angivna värdet eller listan med värden, `value`. En valfri postparameter `options`, kan anges för att styra följande alternativ:

-   `DefaultColumnName` : Det kolumnnamn som används när man skapar en tabell från en lista eller ett skalärvärde.


## Examples

### Example #1
Skapa en tabell från värdet 1.
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2
Skapa en tabell från listan.
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
Skapa en tabell från värdet 1, med ett anpassat kolumnnamn.
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
