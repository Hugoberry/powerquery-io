---
title: List.Zip
---

# List.Zip


## Description

透過合併位於多個清單中相同位置的項目，傳回一連串清單。


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Details

接受一連串清單 <code>lists</code>，並傳回合併位於相同位置之項目的一連串清單。


## Examples

### Example #1 
壓縮簡單清單 \{1, 2} 及 \{3, 4}。
```powerquery
List.Zip({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    {1, 3},
    {2, 4}
}
```


### Example #2 
壓縮長度不同的簡單清單 \{1, 2} 及 \{3}。
```powerquery
List.Zip({{1, 2}, {3}})
```

Result: 
```powerquery
{
    {1, 3},
    {2, null}
}
```




## Category
List.Transformation functions
