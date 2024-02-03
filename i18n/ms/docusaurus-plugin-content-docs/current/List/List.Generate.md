---
title: List.Generate
---

# List.Generate


## Description

Menjana senarai nilai.


## Syntax

```powerquery
List.Generate(
    initial as function,
    condition as function,
    next as function,
    optional selector as function
) as list
```


## Details

Menjana senarai nilai menggunakan fungsi yang diberikan. Fungsi <code>initial</code> menjana nilai calon permulaan, yang kemudiannya diuji terhadap <code>condition</code>.    Jika nilai calon diluluskan, maka ia dikembalikan sebagai sebahagian daripada senarai yang terhasil dan nilai calon seterusnya dijanakan dengan menghulurkan nilai yang baru diluluskan kepada <code>next</code>.    Apabila nilai calon gagal dipadankan <code>condition</code>, proses penjanaan senarai berhenti.    Parameter pilihan, <code>selector</code>, juga boleh diberikan untuk mengubah item dalam senarai yang terhasil.


## Examples

### Example #1 
Cipta senarai bermula dengan sepuluh, turun sebanyak satu secara berulang dan pastikan setiap item adalah lebih besar daripada sifar.
```powerquery
List.Generate(() => 10, each _ > 0, each _ - 1)
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```


### Example #2 
Jana senarai rekod yang mengandungi x dan y, yang mana x ialah nilai dan y ialah senarai. x hendaklah kekal kurang daripada 10 dan mewakili bilangan item dalam senarai y. Selepas senarai dijana, hanya kembalikan nilai x.
```powerquery
List.Generate(
    () => [x = 1, y = {}],
    each [x] < 10,
    each [x = List.Count([y]), y = [y] & {x}],
    each [x]
)
```

Result: 
```powerquery
{1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
```




## Category
List.Generators
