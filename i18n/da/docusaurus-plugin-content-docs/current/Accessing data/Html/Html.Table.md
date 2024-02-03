---
title: Html.Table
---

# Html.Table


## Description

Returnerer en tabel, der indeholder resultaterne af at køre de angivne CSS-vælgere i forhold til den angivne HTML.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Details

Returnerer en tabel, der indeholder resultaterne af de angivne CSS-vælgere mod den leverede <code>html</code>. Det valgfri postparameter <code>options</code> kan benyttes til at angive yderligere egenskaber. Posten kan indeholde følgende felter:    <ul><li><code>RowSelector</code></li></ul>    


## Examples

### Example #1 
Returnerer en tabel fra en html-tekstværdiprøve.
```powerquery
Html.Table("<div class=""name"">Karina</div><span>Manager</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2 
Udtrækker alle HREF&#39;er fra en html-tekst-eksempelværdi.
```powerquery
Html.Table ("<a href=""/test.html"">Test</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Tilgår data
