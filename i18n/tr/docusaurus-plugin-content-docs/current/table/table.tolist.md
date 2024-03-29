---
title: Table.ToList
---

# Table.ToList


Bir tabloyu belirtilen ayırma işlevini tablodaki her değer satırına uygulayarak bir listeye dönüştürür.


## Syntax

```powerquery
Table.ToList(
    table as table,
    optional combiner as function
) as list
```


## Remarks

Bir tabloyu belirtilen ayırma işlevini tablodaki her değer satırına uygulayarak bir listeye dönüştürür.


## Examples

### Example #1 
Her bir satır metnini virgül ile birleştirin.
```powerquery
Table.ToList(
    Table.FromRows({
        {Number.ToText(1), "Bob", "123-4567"},
        {Number.ToText(2), "Jim", "987-6543"},
        {Number.ToText(3), "Paul", "543-7890"}
    }),
    Combiner.CombineTextByDelimiter(",")
)
```

Result: 
```powerquery
{"1,Bob,123-4567", "2,Jim,987-6543", "3,Paul,543-7890"}
```




## Category
Table.Conversions
