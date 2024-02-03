---
title: Html.Table
---

# Html.Table


## Description

Vrne tabelo, ki vsebuje rezultate zagona navedenih izbirnikov CSS v navedenem HTML-ju.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Details

Vrne tabelo, ki vsebuje rezultate zagona navedenih izbirnikov CSS v navedenem <code>html</code>. Navedete lahko izbirni parameter zapisa <code>options</code>, s katerim določite dodatne lastnosti. Zapis lahko vsebuje ta polja:    <ul><li><code>RowSelector</code></li></ul>    


## Examples

### Example #1 
Vrne tabelo iz vzorca besedilne vrednosti HTML.
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Manager</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2 
Izvleče vse oznake HREF iz vzorca besedilne vrednosti HTML.
```powerquery
Html.Table("<a href=""/test.html"">Test</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Dostop do podatkov
