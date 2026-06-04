---
title: List.TransformMany
---

# List.TransformMany


Mengembalikan senarai dengan elemen yang ditransformasikan daripada senarai input menggunakan fungsi yang ditentukan.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

Mengembalikan senarai yang unsurnya diunjurkan daripada senarai input.  
  
Fungsi `collectionTransform` mengubah setiap unsur kepada senarai perantaraan dan fungsi `resultTransform` menerima unsur asal serta item daripada senarai perantaraan untuk membina hasil terakhir.  
  
Fungsi `collectionTransform` mempunyai tandatangan `(x as any) as list => ...`, di mana `x` ialah unsur dalam `list`. Fungsi `resultTransform` mengunjurkan bentuk hasil dan mempunyai tandatangan `(x as any, y as any) as any => ...`, di mana `x` ialah unsur dalam `list` dan `y` ialah unsur daripada senarai yang dijana dengan menghantar `x` kepada `collectionTransform`.


## Examples

### Example #1
Mendatarkan senarai individu dan haiwan kesayangan mereka.
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
