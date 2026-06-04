---
title: Html.Table
---

# Html.Table


Vrne tabelo, ki vsebuje rezultate zagona navedenih izbirnikov CSS v navedenem HTML-ju.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Remarks

Vrne tabelo, ki vsebuje rezultate zagona navedenih izbirnikov CSS v navedenem `html`. Navedete lahko izbirni parameter zapisa `options`, s katerim določite dodatne lastnosti. Zapis lahko vsebuje ta polja:

-   `RowSelector`


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
Accessing data
