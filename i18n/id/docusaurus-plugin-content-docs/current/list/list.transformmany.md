---
title: List.TransformMany
---

# List.TransformMany


Menghasilkan daftar yang elemennya ditransformasikan dari daftar input menggunakan fungsi yang ditetapkan.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

Menghasilkan daftar yang elemennya diproyeksikan dari daftar input.  
  
Fungsi `collectionTransform` mengubah setiap elemen menjadi daftar perantara, dan fungsi `resultTransform` menerima elemen asli serta item dari daftar perantara untuk menyusun hasil akhir.  
  
Fungsi `collectionTransform` memiliki tanda tangan `(x sebagai apa pun) sebagai daftar => ...`, di mana `x` adalah elemen dalam `list`. Fungsi `resultTransform` memproyeksikan bentuk hasil dan memiliki tanda tangan `(x sebagai apa pun, y sebagai apa pun) sebagai apa pun => ...`, di mana `x` adalah elemen dalam `list` dan `y` adalah elemen dari daftar yang dihasilkan dengan meneruskan `x` ke `collectionTransform`.


## Examples

### Example #1
Meratakan daftar orang dan hewan peliharaan mereka.
```powerquery
List.TransformMany(
    {
        [Name = "Alice", Pets = {"Scruffy", "Sam"}],
        [Name = "Bob", Pets = {"Walker"}]
    },
    each [Pets],
    (person, pet) => [Name = person[Name], Pet = pet]
)
```

Result: 
```powerquery
{
    [Name = "Alice", Pet = "Scruffy"],
    [Name = "Alice", Pet = "Sam"],
    [Name = "Bob", Pet = "Walker"]
}
```




## Category
List.Transformation functions
