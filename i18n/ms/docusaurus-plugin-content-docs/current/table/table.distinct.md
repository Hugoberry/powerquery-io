---
title: Table.Distinct
---

# Table.Distinct


Mengalih keluar baris pendua daripada jadual.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Remarks

Mengalih keluar baris pendua daripada jadual. Parameter pilihan, `equationCriteria`, menentukan lajur mana bagi jadual diuji untuk penduaan. Jika `equationCriteria` tidak ditentukan, semua lajur diuji.  
  
Kerana Power Query kadang kala menyahmuatkan operasi tertentu untuk sumber data bahagian belakang (dikenali sebagai "lipatan"), dan kadang kala juga mengoptimumkan pertanyaan mengikut melangkau operasi yang tidak diperlukan dengan ketat, secara umum tiada jaminan yang pendua khusus akan dikekalkan. Sebagai contoh, anda tidak boleh menganggap bahawa baris pertama dengan set unik nilai lajur akan kekal dan baris lebih jauh ke bawah dalam jadual akan dialih keluar. Jika anda ingin pengalihan keluar pendua berkelakuan dengan ramalan, pertama sekali, timbalkan jadual menggunakan `Table.Buffer`.


## Examples

### Example #1
Alih keluar baris pendua daripada jadual.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "b"],
        [a = "A", b = "a"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "B", b = "b"]
})
```


### Example #2
Alih keluar baris pendua daripada lajur \[b\] dalam jadual `({[a = "A", b = "a"], [a = "B", b = "a"], [a = "A", b = "b"]})`.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "a"],
        [a = "A", b = "b"]
    }),
    "b"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "A", b = "b"]
})
```




## Category
Table.Membership
