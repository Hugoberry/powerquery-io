---
title: Function.From
---

# Function.From


Mencipta fungsi dengan tandatangan parameter tertentu di atas fungsi yang mengambil argumen senarai tunggal.


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Remarks

Mengambil fungsi sesatu `function` dan mencipta fungsi baharu dengan jenis `functionType` yang membina senarai daripada argumennya dan memberikannya kepada `function`.


## Examples

### Example #1
Menukar List.Sum kepada fungsi dua argumen yang argumennya ditambah bersama-sama.
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2
Menukar fungsi yang mengambil senarai kepada fungsi dua argumen.
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
