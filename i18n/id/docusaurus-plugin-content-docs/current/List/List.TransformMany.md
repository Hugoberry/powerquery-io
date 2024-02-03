---
title: List.TransformMany
---

# List.TransformMany


## Description

Menghasilkan daftar yang elemennya ditransformasikan dari daftar input menggunakan fungsi yang ditetapkan.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Details

Menghasilkan daftar yang elemennya diproyeksikan dari daftar input.<br />    <br />    Fungsi <code>collectionTransform</code> mengubah setiap elemen menjadi daftar perantara, dan fungsi <code>resultTransform</code> menerima elemen asli serta item dari daftar perantara untuk menyusun hasil akhir.<br />    <br />    Fungsi <code>collectionTransform</code> memiliki tanda tangan <code>(x sebagai apa pun) sebagai daftar => ...</code>, di mana <code>x</code> adalah elemen dalam <code>list</code>.    Fungsi <code>resultTransform</code> memproyeksikan bentuk hasil dan memiliki tanda tangan <code>(x sebagai apa pun, y sebagai apa pun) sebagai apa pun => ...</code>, di mana <code>x</code> adalah elemen dalam <code>list</code> dan <code>y</code> adalah elemen dari daftar yang dihasilkan dengan meneruskan <code>x</code> ke <code>collectionTransform</code>.


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
