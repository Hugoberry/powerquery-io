---
title: List.TransformMany
---

# List.TransformMany


## Description

Mengembalikan senarai dengan elemen yang ditransformasikan daripada senarai input menggunakan fungsi yang ditentukan.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Details

Mengembalikan senarai yang unsurnya diunjurkan daripada senarai input.<br />    <br />    Fungsi <code>collectionTransform</code> mengubah setiap unsur kepada senarai perantaraan dan fungsi <code>resultTransform</code> menerima unsur asal serta item daripada senarai perantaraan untuk membina hasil terakhir.<br />    <br />    Fungsi <code>collectionTransform</code> mempunyai tandatangan <code>(x as any) as list => ...</code>, di mana <code>x</code> ialah unsur dalam <code>list</code>.    Fungsi <code>resultTransform</code> mengunjurkan bentuk hasil dan mempunyai tandatangan <code>(x as any, y as any) as any => ...</code>, di mana <code>x</code> ialah unsur dalam <code>list</code> dan <code>y</code> ialah unsur daripada senarai yang dijana dengan menghantar <code>x</code> kepada <code>collectionTransform</code>.


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
