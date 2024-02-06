---
title: Html.Table
---

# Html.Table


Returnerar en tabell som innehåller resultatet av att köra de angivna CSS-väljare mot angiven HTML.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Remarks

Returnerar en tabell som innehåller resultatet av en körning av de angivna CSS-väljarna mot tillhandahållna <code>html</code>. Ytterligare egenskaper kan anges genom att en valfri postparameter, <code>options</code>, tillhandahålls. Posten kan innehålla följande fält:    <ul><li><code>RowSelector</code></li></ul>    


## Examples

### Example #1 
Returnerar en tabell från ett HTML-exempeltextvärde.
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Ansvarig</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2 
Extraherar alla hrefar från ett HTML-exempeltextvärde.
```powerquery
Html.Table(”<a href=""/test.html"">Test</a>”, {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Öppnar data
