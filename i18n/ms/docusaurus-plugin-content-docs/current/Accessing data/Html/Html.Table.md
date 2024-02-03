---
title: Html.Table
---

# Html.Table


## Description

Mengembalikan jadual yang mengandungi hasil yang menjalankan pemilih CSS yang ditentukan terhadap HTML yang diberikan.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Details

Mengembalikan jadual yang mengandungi keputusan pelaksanaan pemilih CSS yang ditentukan berbanding <code>html</code> yang disediakan. Parameter rekod pilihan, <code>options</code>, mungkin disediakan untuk menentukan sifat tambahan. Rekod tersebut boleh mengandungi medan yang berikut:    <ul><li><code>RowSelector</code></li></ul>    


## Examples

### Example #1 
Mengembalikan jadual daripada sampel nilai teks html.
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Pengurus</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2 
Ekstrak semua hrefs daripada nilai teks html sampel.
```powerquery
Html.Table("<a href=""/test.html"">Ujian</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Mencapai data
