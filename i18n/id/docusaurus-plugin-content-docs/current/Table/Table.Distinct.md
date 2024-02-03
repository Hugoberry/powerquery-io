---
title: Table.Distinct
---

# Table.Distinct


## Description

Menghapus baris duplikat dari tabel.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Details

Menghapus baris duplikat dari tabel.    Parameter opsional, <code>equationCriteria</code>, menentukan kolom tabel mana yang diuji untuk duplikasi. Jika <code>equationCriteria</code> tidak ditentukan, semua kolom akan diuji.<br />    <br />    Karena Power Query terkadang memindahkan operasi tertentu ke sumber data backend (dikenal sebagai "pelipatan"), dan terkadang juga mengoptimalkan kueri dengan     melewati operasi yang tidak benar-benar diperlukan, secara umum tidak ada jaminan duplikat tertentu yang akan dipertahankan.    Misalnya, Anda tidak dapat mengasumsikan bahwa baris pertama dengan rangkaian nilai kolom yang unik akan tetap ada, dan baris di bawah tabel akan dihapus.    Jika Anda ingin penghapusan duplikat berperilaku seperti yang dapat diprediksi, pertama-tama buffer tabel menggunakan <code>Table.Buffer</code>.


## Examples

### Example #1 
Menghapus baris duplikat dari tabel.
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
Menghapus baris duplikat dari kolom [b] dalam tabel &lt;code&gt;(\{[a = &#34;A&#34;, b = &#34;a&#34;], [a = &#34;B&#34;, b = &#34;a&#34;], [a = &#34;A&#34;, b = &#34;b&#34;]})&lt;/code&gt;.
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
