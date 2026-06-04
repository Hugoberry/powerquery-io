---
title: DateTime.From
---

# DateTime.From


Mencipta datetime daripada nilai yang ditentukan.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Mengembalikan nilai `tarikhmasa` daripada `value` yang diberikan. `culture` pilihan juga mungkin diberikan (sebagai contoh, "en-US"). Jika `value` yang ditentukan adalah `nol`, `DateTime.From` mengembalikan `nol`. Jika `value` yang ditentukan ialah `tarikhmasa`, `value` dikembalikan. Nilai bagi jenis berikut boleh ditukarkan kepada nilai `tarikhmasa`:

-   `teks`: Nilai `tarikhmasa` daripada perwakilan teks. Rujuk `DateTime.FromText` untuk butiran.
-   `tarikh`: `tarikhmasa` dengan `value` sebagai komponen tarikh dan `12:00:00 TGH MLM` sebagai komponen masa.
-   `datetimezone`: `tarikhmasa` setempat yang setara bagi `value`.
-   `masa`: `tarikhmasa` dengan tarikh yang setara bagi Tarikh Automasi OLE bagi `0` sebagai komponen tarikh dan `value` sebagai komponen masa.
-   `nombor`: `tarikhmasa` yang setara dengan Tarikh Automasi OLE yang dinyatakan oleh `value`.

Jika `value` adalah daripada apa-apa jenis lain, ralat dikembalikan.


## Examples

### Example #1
Menukar `#time(06, 45, 12)` kepada nilai `datetime`.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
Menukar `#date(1975, 4, 4)` kepada nilai `datetime`.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
