---
title: List.Zip
---

# List.Zip


## Description

Birçok listede aynı konumda bulunan öğeleri birleştirerek listelerin yer aldığı bir liste döndürür.


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Details

Liste listesi (<code>lists</code>) ve aynı konumdaki öğeleri bir araya getirerek listelerin bulunduğu bir liste döndürür.


## Examples

### Example #1 
İki basit listeyi (\{1, 2} ve \{3, 4}) sıkıştırır.
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
Farklı uzunluklardaki iki basit listeyi (\{1, 2} ve \{3}) sıkıştırır.
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
