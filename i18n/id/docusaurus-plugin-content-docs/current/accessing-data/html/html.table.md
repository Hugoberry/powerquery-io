---
title: Html.Table
---

# Html.Table


Menghasilkan tabel yang berisi hasil dari eksekusi pemilih CSS yang ditentukan terhadap HTML yang diberikan.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Remarks

Mengembalikan tabel yang berisi hasil dari menjalankan pemilih CSS tertentu terhadap `html` yang disediakan. Parameter catatan opsional, `options`, diberikan untuk menentukan properti tambahan. Catatan dapat berisi bidang berikut:

-   `RowSelector`


## Examples

### Example #1
Mengembalikan tabel dari contoh nilai teks html.
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Manager</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2
Mengekstrak semua hrefs dari sampel nilai teks html.
```powerquery
Html.Table("<a href=""/test.html"">Test</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Accessing data
