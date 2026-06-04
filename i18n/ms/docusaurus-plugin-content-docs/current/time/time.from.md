---
title: Time.From
---

# Time.From


Mencipta masa daripada nilai yang ditentukan.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Mengembalikan nilai `masa` daripada `value` yang ditentukan. `culture` pilihan juga mungkin diberikan (sebagai contoh, "en-US"). Jika `value` yang ditentukan adalah `nol`, `Time.From` mengembalikan `nol`. Jika `value` yang ditentukan adalah `masa`, `value` dikembalikan. Nilai bagi jenis berikut boleh ditukarkan kepada nilai `masa`:

-   `teks`: Nilai `masa` daripada perwakilan teks. Rujuk `Time.FromText` untuk butiran.
-   `tarikhmasa`: Komponen masa bagi `value`.
-   `datetimezone`: Komponen masa bagi tarikhmasa yang setara bagi `value`.
-   `nombor`: `Masa` yang setara dengan bilangan hari pecahan yang dinyatakan oleh `value`. Jika `value` adalah negatif atau lebih besar atau sama dengan 1, ralat dikembalikan.

Jika `value` adalah daripada apa-apa jenis lain, ralat dikembalikan.


## Examples

### Example #1
Menukar `0.7575` kepada nilai `time`.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
Menukar `#datetime(1899, 12, 30, 06, 45, 12)` kepada nilai `time`.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
