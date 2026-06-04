---
title: Html.Table
---

# Html.Table


Returnează un tabel care conține rezultatele rulării selectorilor CSS specificați în raport cu HTML-ul furnizat.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Remarks

Returnează un tabel care conține rezultatele rulării selectorilor CSS specificați pentru `html` furnizate. Poate fi furnizat un parametru opțional de înregistrare, `options`, pentru a specifica proprietăți suplimentare. Înregistrarea poate conține următoarele câmpuri:

-   `RowSelector`


## Examples

### Example #1
Returnează un tabel pornind de la o valoare text HTML eșantion.
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Manager</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
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
Accessing data
