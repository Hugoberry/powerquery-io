---
title: Html.Table
---

# Html.Table


Hiermee wordt een tabel geretourneerd met de resultaten van het uitvoeren van de opgegeven CSS-selectoren op basis van de opgegeven HTML.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Remarks

Hiermee wordt een tabel geretourneerd met de resultaten van de opgegeven CSS-selectors ten opzichte van de opgegeven <code>html</code>. Een optionele recordparameter, <code>options</code>, kan worden opgegeven om extra eigenschappen op te geven. De record kan de volgende velden bevatten:    <ul><li><code>RowSelector</code></li></ul>    


## Examples

### Example #1 
Hiermee wordt een tabel geretourneerd uit een voorbeeldwaarde voor HTML-tekst.
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Manager</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2 
Hiermee worden de HREF&#39;s opgehaald uit een voorbeeld van een HTML-tekstwaarde.
```powerquery
Html.Table("<a href=""/test.html"">Test</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Toegang tot gegevens
