---
title: Html.Table
---

# Html.Table


## Description

Menghasilkan tabel yang berisi hasil dari eksekusi pemilih CSS yang ditentukan terhadap HTML yang diberikan.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Details

Mengembalikan tabel yang berisi hasil dari menjalankan pemilih CSS tertentu terhadap <code>html</code> yang disediakan. Parameter catatan opsional, <code>options</code>, diberikan untuk menentukan properti tambahan. Catatan dapat berisi bidang berikut:    <ul><li><code>RowSelector</code></li></ul>    


## Examples

### Example #1 
Mengembalikan tabel dari contoh nilai teks html.
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Manajer</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#tabel({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2 
Mengekstrak semua hrefs dari sampel nilai teks html.
```powerquery
Html.Table ("<a href=""/test.html"">Pengujian</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Mengakses data
