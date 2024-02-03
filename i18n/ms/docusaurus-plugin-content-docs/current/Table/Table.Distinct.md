---
title: Table.Distinct
---

# Table.Distinct


## Description

Mengalih keluar baris pendua daripada jadual.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Details

Mengalih keluar baris pendua daripada jadual.    Parameter pilihan, <code>equationCriteria</code>, menentukan lajur mana bagi jadual diuji untuk penduaan. Jika <code>equationCriteria</code> tidak ditentukan, semua lajur diuji.<br />    <br />    Kerana Power Query kadang kala menyahmuatkan operasi tertentu untuk sumber data bahagian belakang (dikenali sebagai "lipatan"), dan kadang kala mengoptimumkan pertanyaan mengikut     melangkau operasi yang tidak diperlukan dengan ketat, secara umum tiada jaminan yang pendua khusus akan dikekalkan.    Sebagai contoh, anda tidak boleh menganggap bahawa baris pertama dengan set unik nilai lajur akan kekal dan baris lebih jauh ke bawah dalam jadual akan dialih keluar.    Jika anda ingin pengalihan keluar pendua berkelakuan dengan ramalan, pertama sekali, timbalkan jadual menggunakan <code>Table.Buffer</code>.


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
Alih keluar baris pendua daripada lajur [b] dalam jadual &lt;code&gt;(\{[a = &#34;A&#34;, b = &#34;a&#34;], [a = &#34;B&#34;, b = &#34;a&#34;], [a = &#34;A&#34;, b = &#34;b&#34;]})&lt;/code&gt;.
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
