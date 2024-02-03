---
title: List.Sum
---

# List.Sum


## Description

A listán szereplő elemek összegét adja vissza.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

A(z) <code>list</code> listán szereplő nem null értékek összegét adja vissza. Null értéket ad vissza, ha nem szerepel a listán nem null értékű szám.


## Examples

### Example #1 
Az &lt;code&gt;\{1, 2, 3}&lt;/code&gt; listán szereplő számok összegének meghatározása
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
