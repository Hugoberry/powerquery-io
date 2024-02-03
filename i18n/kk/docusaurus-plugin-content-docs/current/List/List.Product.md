---
title: List.Product
---

# List.Product


## Description

Тізімдегі сандардың көбейтіндісін қайтарады.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Details

<code>numbersList</code> тізіміндегі мәні нөл емес сандардың көбейтіндісін қайтарады. Тізімде мәні нөл емес мәндер жоқ болса, нөл мәнін қайтарады.


## Examples

### Example #1 
&lt;code&gt;\{1, 2, 3, 3, 4, 5, 5}&lt;/code&gt; тізіміндегі сандардың көбейтіндісін анықтау.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
