---
title: Html.Table
---

# Html.Table


## Description

Returnează un tabel care conține rezultatele rulării selectorilor CSS specificați în raport cu HTML-ul furnizat.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Details

Returnează un tabel care conține rezultatele rulării selectorilor CSS specificați pentru <code>html</code> furnizate. Poate fi furnizat un parametru opțional de înregistrare, <code>options</code>, pentru a specifica proprietăți suplimentare. Înregistrarea poate conține următoarele câmpuri:    <ul><li><code>RowSelector</code></li></ul>    


## Examples

### Example #1 
Returnează un tabel pornind de la o valoare text HTML eșantion.
```powerquery
Html.Table("<div class=""name"">Alexandru</div><span>Manager</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2 
Extrage toate elementele href dintr-o valoare text HTML eșantion.
```powerquery
Html.Table("<a href=""/test.html"">Test</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Se accesează datele
