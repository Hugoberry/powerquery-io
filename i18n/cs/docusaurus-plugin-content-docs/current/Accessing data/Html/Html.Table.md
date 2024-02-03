---
title: Html.Table
---

# Html.Table


## Description

Vrátí tabulku obsahující výsledky spuštění zadaných selektorů CSS pro zadaný kód HTML.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Details

Vrací tabulku, která obsahuje výsledky spuštění zadaných selektorů CSS proti poskytnuté <code>html</code>. Je možné zadat volitelný parametr <code>options</code>, který zadá dodatečné vlastnosti. Tento záznam může obsahovat následující pole:    <ul><li><code>RowSelector</code></li></ul>    


## Examples

### Example #1 
Vrací tabulku z hodnoty ukázkového textu html.
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Manager</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2 
Extrahuje všechny odkazy href ze vzorového textu ve formátu HTML.
```powerquery
Html.Table("<a href=""/test.html"">Test</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Přístup k datům
