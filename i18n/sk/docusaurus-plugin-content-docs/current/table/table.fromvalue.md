---
title: Table.FromValue
---

# Table.FromValue


Vytvorí tabuľku so stĺpcom zo zadaných hodnôt.


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Remarks

Vytvorí tabuľku so stĺpcom obsahujúcim zadanú hodnotu alebo zoznam hodnôt `value`. Voliteľný parameter záznamu, `options`, je možné zadať na ovládanie nasledujúcich možností:

-   `DefaultColumnName`: Názov stĺpca použitý pri vytváraní tabuľky zo zoznamu alebo skalárnej hodnoty.


## Examples

### Example #1
Vytvorte tabuľku z hodnoty 1.
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2
Vytvorte tabuľku zo zoznamu.
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
Vytvorenie tabuľky z hodnoty 1 s vlastným názvom stĺpca.
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
