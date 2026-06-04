---
title: Table.FromValue
---

# Table.FromValue


Берілген мәннен(дерден) бағаны бар кесте жасайды.


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Remarks

Көрсетілген мәнді немесе мәндер тізімін қамтитын бағаны бар кесте жасайды, `value`. Қосымша жазба параметрі, `options`, келесі параметрлерді басқару үшін көрсетілуі мүмкін:

-   `DefaultColumnName` : Тізімнен немесе шкала мәнінен кесте құрастыру кезінде пайдаланылатын баған.


## Examples

### Example #1
1 мәнінен кесте жасау.
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2
Тізімнен кесте жасау.
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
Реттелетін баған атауы бар 1 мәнінен кесте жасау.
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
