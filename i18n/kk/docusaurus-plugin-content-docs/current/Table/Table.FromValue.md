---
title: Table.FromValue
---

# Table.FromValue


## Description

Берілген мәннен(дерден) бағаны бар кесте жасайды.


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Details

Көрсетілген мәнді немесе мәндер тізімін қамтитын бағаны бар кесте жасайды, <code>value</code>. Қосымша жазба параметрі, <code>options</code>, келесі параметрлерді басқару үшін көрсетілуі мүмкін:    <ul>    <li> <code>DefaultColumnName</code> : Тізімнен немесе шкала мәнінен кесте құрастыру кезінде пайдаланылатын баған.</li>    </ul>  


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
