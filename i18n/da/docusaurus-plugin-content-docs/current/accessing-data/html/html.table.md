---
title: Html.Table
---

# Html.Table


Returnerer en tabel, der indeholder resultaterne af at køre de angivne CSS-vælgere i forhold til den angivne HTML.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Remarks

Returnerer en tabel, der indeholder resultaterne af de angivne CSS-vælgere mod den leverede `html`. Det valgfri postparameter `options` kan benyttes til at angive yderligere egenskaber. Posten kan indeholde følgende felter:

-   `RowSelector`


## Examples

### Example #1
Returnerer en tabel fra en html-tekstværdiprøve.
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Manager</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2
Udtrækker alle HREF'er fra en html-tekst-eksempelværdi.
```powerquery
Html.Table("<a href=""/test.html"">Test</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Accessing data
