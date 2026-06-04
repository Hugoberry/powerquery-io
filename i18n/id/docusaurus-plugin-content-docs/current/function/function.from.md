---
title: Function.From
---

# Function.From


Membuat fungsi dengan tanda tangan parameter tertentu di atas fungsi yang mengambil argumen daftar tunggal.


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Remarks

Membutuhan fungsi tunggal `function` dan membuat fungsi baru dengan jenis `functionType` yang membangun daftar di luar argumen dan membagikannya ke `function`.


## Examples

### Example #1
Mengonversi List.Sum menjadi fungsi dua argumen yang argumennya ditambahkan bersamaan.
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2
Mengonversi fungsi yang mengambil daftar menjadi fungsi dua argumen.
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
