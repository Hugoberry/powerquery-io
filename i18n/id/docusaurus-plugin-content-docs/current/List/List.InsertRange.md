---
title: List.InsertRange
---

# List.InsertRange


## Description

Menyisipkan nilai ke dalam daftar pada indeks tertentu.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Details

Menghasilkan daftar baru yang diproduksi dengan menyisipkan nilai dalam <code>values</code> ke <code>list</code> pada <code>index</code>. Posisi pertama dalam daftar berada pada indeks 0.      <ul>        <li><code>list</code>: Daftar target yang digunakan untuk menyisipkan nilai.</li>        <li><code>index</code>: Indeks daftar target (<code>list</code>) yang digunakan untuk menyisipkan nilai. Posisi pertama dalam daftar berada pada indeks 0.</li>        <li><code>values</code>: Daftar nilai yang akan disisipkan ke <code>list</code>.</li>      </ul>


## Examples

### Example #1 
Menyisipkan daftar (\{3, 4}) ke dalam daftar target (\{1, 2, 5}) pada indeks 2.
```powerquery
List.InsertRange({1, 2, 5}, 2, {3, 4})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5
}
```


### Example #2 
Menyisipkan daftar dengan daftar bersarang (\{1, \{1.1, 1.2}}) ke dalam daftar target (\{2, 3, 4}) pada indeks 0.
```powerquery
List.InsertRange({2, 3, 4}, 0, {1, {1.1, 1.2}})
```

Result: 
```powerquery
{
    1,
    {
        1.1,
        1.2
    },
    2,
    3,
    4
}
```




## Category
List.Selection
