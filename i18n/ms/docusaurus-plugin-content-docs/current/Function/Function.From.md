---
title: Function.From
---

# Function.From


## Description

Membuat fungsi dengan tandatangan parameter khusus di sebelah atas fungsi yang mengambil argumen senarai tunggal


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Details

Mengambil fungsi sesatu <code>function</code> dan mencipta fungsi baharu dengan jenis <code>functionType</code> yang membina senarai daripada argumennya dan memberikannya kepada <code>function</code>.


## Examples

### Example #1 
Menukarkan List.Sum ke dalam fungsi dua argumen yang argumennya dijumlahkan
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2 
Menukarkan fungsi dengan mengambil senarai ke dalam fungsi dua argumen
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
