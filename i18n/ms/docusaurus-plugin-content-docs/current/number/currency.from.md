---
title: Currency.From
---

# Currency.From


Mengembalikan nilai mata wang daripada nilai yang ditentukan.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Mengembalikan nilai `mata wang` daripada `value` yang ditentukan. Jika `value` yang ditentukan ialah `nol`, `Currency.From` mengembalikan `nol`. Jika `value` yang ditentukan ialah `nombor` dalam julat mata wang, bahagian pecahan bagi `value` dibundarkan kepada 4 digit perpuluhan dan dikembalikan. Jika `value` adalah daripada apa-apa jenis lain, ia terlebih dahulu akan ditukarkan kepada `nombor` menggunakan `Number.FromText`. Julat yang sah untuk mata wang adalah `-922,337,203,685,477.5808` ke `922,337,203,685,477.5807`. Rujuk `Number.Round` untuk mod pembundaran yang tersedia. Lalai ialah `RoundingMode.ToEven`. `culture` pilihan juga mungkin diberikan (sebagai contoh, "en-US").


## Examples

### Example #1
Dapatkan nilai `currency` daripada `"1.23455"`.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
Dapatkan nilai `currency` daripada `"1.23455"` dengan menggunakan `RoundingMode.Down`.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
